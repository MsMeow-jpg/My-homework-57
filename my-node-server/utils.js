const fs = require('fs');
const path = require('path');

const MAX_BODY_SIZE = 1024 * 1024;

const sanitizeHtml = (value) => {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
};

const sendHtml = (response, statusCode, html) => {
  const bodyBuffer = Buffer.from(html, 'utf8');

  response.writeHead(statusCode, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': bodyBuffer.length,
    'X-Content-Type-Options': 'nosniff',
  });

  response.end(bodyBuffer);
};

const sendFile = (response, filePath, contentType) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>File Not Found</title>
</head>
<body>
  <h1>File Not Found</h1>
  <p>Requested file was not found.</p>
</body>
</html>`;

      sendHtml(response, 404, html);
      return;
    }

    response.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': data.length,
      'X-Content-Type-Options': 'nosniff',
    });

    response.end(data);
  });
};

const getPublicFilePath = (fileName) => {
  return path.join(__dirname, 'public', fileName);
};

const parseRequestBody = (request) => {
  return new Promise((resolve, reject) => {
    let body = '';
    let bodySize = 0;

    request.on('data', (chunk) => {
      bodySize += chunk.length;

      if (bodySize > MAX_BODY_SIZE) {
        reject({ statusCode: 413, message: 'Payload Too Large' });
        request.destroy();
        return;
      }

      body += chunk.toString();
    });

    request.on('end', () => {
      resolve(body);
    });

    request.on('error', () => {
      reject({ statusCode: 500, message: 'Server Error' });
    });
  });
};

module.exports = {
  MAX_BODY_SIZE,
  sanitizeHtml,
  sendHtml,
  sendFile,
  getPublicFilePath,
  parseRequestBody,
};