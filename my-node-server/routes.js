const url = require('url');
const querystring = require('querystring');

const {
  renderHomePage,
  renderAboutPage,
  renderContactPage,
  renderStatusPage,
  renderSubmittedPage,
  renderErrorPage,
} = require('./htmlTemplates');

const {
  sanitizeHtml,
  sendHtml,
  sendFile,
  getPublicFilePath,
  parseRequestBody,
} = require('./utils');

const PORT = process.env.PORT || 3000;

const getRoutes = {
  '/': () => renderHomePage(),
  '/about': () => renderAboutPage(),
  '/contact': () => renderContactPage(),
  '/status': (request, pathname) =>
    renderStatusPage({
      status: 'Online',
      port: PORT,
      uptime: Math.floor(process.uptime()),
      nodeVersion: process.version,
      method: request.method,
      route: pathname,
    }),
};

const staticRoutes = {
  '/rick.png': {
    fileName: 'rick.png',
    contentType: 'image/png',
  },
  '/morty.mp3': {
    fileName: 'morty.mp3',
    contentType: 'audio/mpeg',
  },
};

const isValidEmail = (email) => {
  return email.includes('@') && email.includes('.');
};

const logRequest = (request, pathname, statusCode) => {
  const date = new Date().toISOString();
  console.log(`[${date}] ${request.method} ${pathname} - ${statusCode}`);
};

const handleStaticFileRequest = (request, pathname, response) => {
  const staticFile = staticRoutes[pathname];

  if (!staticFile) {
    return false;
  }

  const filePath = getPublicFilePath(staticFile.fileName);
  sendFile(response, filePath, staticFile.contentType);
  logRequest(request, pathname, 200);

  return true;
};

const handleGetRequest = (request, pathname, response) => {
  const isStaticFile = handleStaticFileRequest(request, pathname, response);

  if (isStaticFile) {
    return;
  }

  const routeHandler = getRoutes[pathname];

  if (!routeHandler) {
    const html = renderErrorPage(
      '404 — Dimension Not Found',
      'Page Not Found',
      'This route probably got lost in another timeline.'
    );

    sendHtml(response, 404, html);
    logRequest(request, pathname, 404);
    return;
  }

  const html = routeHandler(request, pathname);
  sendHtml(response, 200, html);
  logRequest(request, pathname, 200);
};

const handlePostSubmit = async (request, pathname, response) => {
  const contentType = request.headers['content-type'] || '';

  if (!contentType.includes('application/x-www-form-urlencoded')) {
    const html = renderErrorPage(
      '400 — Bad Request',
      'Invalid form data',
      'Expected Content-Type: application/x-www-form-urlencoded.'
    );

    sendHtml(response, 400, html);
    logRequest(request, pathname, 400);
    return;
  }

  const rawBody = await parseRequestBody(request);
  const parsedData = querystring.parse(rawBody);

  const name = parsedData.name ? String(parsedData.name).trim() : '';
  const email = parsedData.email ? String(parsedData.email).trim() : '';

  if (!name || !email) {
    const html = renderErrorPage(
      '400 — Bad Request',
      'Invalid form data',
      'The portal needs both name and email.'
    );

    sendHtml(response, 400, html);
    logRequest(request, pathname, 400);
    return;
  }

  if (!isValidEmail(email)) {
    const html = renderErrorPage(
      '400 — Bad Request',
      'Invalid form data',
      'Email must contain "@" and "." symbols.'
    );

    sendHtml(response, 400, html);
    logRequest(request, pathname, 400);
    return;
  }

  const safeName = sanitizeHtml(name);
  const safeEmail = sanitizeHtml(email);

  const html = renderSubmittedPage(safeName, safeEmail);
  sendHtml(response, 200, html);
  logRequest(request, pathname, 200);
};

const handleMethodNotAllowed = (request, pathname, response) => {
  const html = renderErrorPage(
    '405 — Method Not Allowed',
    'Method Not Allowed',
    `The ${request.method} method is not supported for this route.`
  );

  sendHtml(response, 405, html);
  logRequest(request, pathname, 405);
};

const handleRequest = async (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathname = parsedUrl.pathname;

  try {
    if (request.method === 'GET') {
      handleGetRequest(request, pathname, response);
      return;
    }

    if (request.method === 'POST' && pathname === '/submit') {
      await handlePostSubmit(request, pathname, response);
      return;
    }

    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) {
      handleMethodNotAllowed(request, pathname, response);
      return;
    }

    const html = renderErrorPage(
      '404 — Dimension Not Found',
      'Page Not Found',
      'This route probably got lost in another timeline.'
    );

    sendHtml(response, 404, html);
    logRequest(request, pathname, 404);
  } catch (error) {
    if (error.statusCode === 413) {
      const html = renderErrorPage(
        '413 — Payload Too Large',
        'Payload Too Large',
        'The request body is larger than 1 MB. The portal refuses to swallow that much data.'
      );

      sendHtml(response, 413, html);
      logRequest(request, pathname, 413);
      return;
    }

    const html = renderErrorPage(
      '500 — Server Error',
      'Server Error',
      'Unexpected server failure. The portal coughed ominously.'
    );

    sendHtml(response, 500, html);
    logRequest(request, pathname, 500);
  }
};

module.exports = {
  handleRequest,
};