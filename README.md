# Homework 57 — Rick and Morty Inspired Node.js HTTP Server

## 📌 Project Description

This is a basic HTTP server project created with **Node.js**.

The server is built using only built-in Node.js modules.

The project is styled as a **Rick and Morty inspired portal server**.  
It has a dark sci-fi interface, green portal effects, animated CSS portal, custom HTML pages, a contact form, a server status page, custom error pages, a fixed Rick music button, and background audio toggle.

The main goal of this homework is to practice creating a basic HTTP server without Express or any third-party backend libraries.

The project implements:

- basic HTTP server
- server listening on port `3000`
- optional `PORT` environment variable
- GET routes
- POST route
- manual routing
- static HTML generation
- form data parsing
- request body size limit
- input validation
- email validation
- input sanitization
- custom error pages
- correct response headers
- static file handling
- image file serving
- audio file serving
- fixed music toggle button
- animated portal design
- console request logging
- modular code structure
- Vercel configuration for deployment

---

## 🚀 Technologies

- Node.js
- JavaScript
- Built-in `http` module
- Built-in `url` module
- Built-in `querystring` module
- Built-in `fs` module
- Built-in `path` module
- HTML
- CSS
- Git Bash
- Curl
- Vercel

---

## 📁 Project Structure

```bash
HOMEWORK 57/
└── my-node-server/
    ├── public/
    │   ├── rick.png
    │   └── morty.mp3
    ├── server.js
    ├── routes.js
    ├── htmlTemplates.js
    ├── utils.js
    ├── package.json
    ├── vercel.json
    └── README.md
```

---

## 📂 Files Description

```bash
server.js          → creates and starts the HTTP server
routes.js          → handles GET routes, POST route, static files, and errors
htmlTemplates.js   → generates HTML pages and page styles
utils.js           → contains helper functions for responses, files, sanitization, and body parsing
public/rick.png    → image used as the fixed music button
public/morty.mp3   → audio file used by the music toggle button
package.json       → project metadata and npm scripts
vercel.json        → Vercel deployment configuration
README.md          → project documentation
```

---

## ⚙️ Installation and Launch

1. Clone the repository:

```bash
git clone https://github.com/MsMeow-jpg/My-homework-57
```

2. Go to the project folder:

```bash
cd "My-homework-57/my-node-server"
```

If the repository opens directly inside the server folder, use:

```bash
cd My-homework-57
```

3. Install dependencies:

```bash
npm install
```

There are no external dependencies in this project.  
The project uses only built-in Node.js modules.

4. Start the server:

```bash
npm start
```

Or:

```bash
node server.js
```

---

After this, the server will be available at:

```bash
http://localhost:3000
```

---

## 🌐 Demo

Live demo:

```bash
YOUR_VERCEL_LINK
```

---

## 🔗 Repository

GitHub repository:

```bash
https://github.com/MsMeow-jpg/My-homework-57
```

---

## 📦 Functionality

- The project creates a basic HTTP server
- The server listens on port `3000`
- The server supports the `PORT` environment variable
- The server handles GET requests
- The server handles POST requests
- The server uses manual routing
- The server returns generated HTML pages
- The server parses form data
- The server validates form fields
- The server validates email format
- The server sanitizes user input before rendering it
- The server limits POST request body size to 1 MB
- The server returns correct HTTP status codes
- The server adds required response headers
- The server serves static image and audio files
- The project includes a Rick image music button
- The music button is fixed at the bottom-right side of the screen
- The music button turns music on and off
- The project includes a custom Rick and Morty inspired design
- The project includes animated CSS portal effects
- The project includes a server status page
- The project includes request logging in the console
- The project includes custom styled error pages
- The project can be deployed to Vercel

---

## 🌐 Available Routes

### GET `/`

Returns the Home page.

The page contains:

- main title
- portal animation
- navigation
- terminal-style system log
- links to Contact and Status pages
- fixed Rick music button

Example request:

```bash
curl -i http://localhost:3000/
```

Example response content:

```html
<h1>Home</h1>
<p>Welcome to the Home Page...</p>
```

---

### GET `/about`

Returns the About page.

The page contains information about the project and technology badges.

Example request:

```bash
curl -i http://localhost:3000/about
```

Example response content:

```html
<h1>About</h1>
<p>Learn more about us...</p>
```

Technology badges include:

```bash
Node.js
http
url
querystring
No Express
Security
```

---

### GET `/contact`

Returns the Contact page with an HTML form.

The form sends data to:

```bash
POST /submit
```

Example request:

```bash
curl -i http://localhost:3000/contact
```

Example response content:

```html
<h1>Contact</h1>
<form method="POST" action="/submit">
```

---

### GET `/status`

Returns the server status page.

The page displays:

- server status
- current port
- server uptime
- Node.js version
- request method
- current route

Example request:

```bash
curl -i http://localhost:3000/status
```

Example response content:

```html
<h1>Server Status</h1>
```

---

### GET `/rick.png`

Returns the Rick image used for the fixed music button.

Example request:

```bash
curl -i http://localhost:3000/rick.png
```

This route serves:

```bash
public/rick.png
```

---

### GET `/morty.mp3`

Returns the audio file used by the music toggle button.

Example request:

```bash
curl -i http://localhost:3000/morty.mp3
```

This route serves:

```bash
public/morty.mp3
```

---

### POST `/submit`

Processes form data sent as:

```bash
application/x-www-form-urlencoded
```

Expected fields:

```bash
name
email
```

Example request:

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Rick&email=rick@portal.com"
```

Example response content:

```html
<h1>Form Submitted</h1>
<p>Name: Rick</p>
<p>Email: rick@portal.com</p>
```

---

## 📝 Form Handling

The Contact page contains a form with two fields:

```bash
name
email
```

The form uses:

```html
<form method="POST" action="/submit">
```

The server receives the data, parses it with the built-in `querystring` module, validates it, sanitizes it, and returns a confirmation HTML page.

---

## 🔐 Validation

The server validates POST data.

The form is invalid if:

```bash
name is empty
email is empty
email does not contain "@"
email does not contain "."
Content-Type is not application/x-www-form-urlencoded
```

Invalid data returns:

```bash
400 Bad Request
```

---

## 🧼 Input Sanitization

User input is sanitized before being displayed on the page.

The server replaces dangerous characters:

```bash
&  → &amp;
<  → &lt;
>  → &gt;
"  → &quot;
'  → &#039;
```

This prevents simple XSS injection.

Example test:

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=<script>alert(1)</script>&email=test@test.com"
```

The script tag will be displayed as safe text instead of being executed.

Expected safe output:

```html
&lt;script&gt;alert(1)&lt;/script&gt;
```

---

## 📏 Request Body Limit

The POST request body is limited to:

```bash
1 MB
```

If the request body is larger than 1 MB, the server returns:

```bash
413 Payload Too Large
```

This protects the server from very large request bodies.

---

## 📬 Response Headers

Each HTML response includes:

```bash
Content-Type: text/html; charset=utf-8
Content-Length: response body size in bytes
X-Content-Type-Options: nosniff
```

Static image and audio responses also include:

```bash
Content-Type
Content-Length
X-Content-Type-Options: nosniff
```

These headers are added through helper functions in `utils.js`.

---

## ❌ Error Handling

The server handles different error scenarios.

### 404 Not Found

Returned for unknown routes.

Example request:

```bash
curl -i http://localhost:3000/unknown
```

Response:

```html
<h1>404 — Dimension Not Found</h1>
<p>Page Not Found</p>
```

---

### 400 Bad Request

Returned when form data is invalid.

Invalid examples:

```bash
empty name
empty email
invalid email format
wrong Content-Type
```

Example request:

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=&email=rick@portal.com"
```

Expected status:

```bash
400 Bad Request
```

---

### 405 Method Not Allowed

Returned when an unsupported HTTP method is used.

Example request:

```bash
curl -i -X DELETE http://localhost:3000/contact
```

Expected status:

```bash
405 Method Not Allowed
```

---

### 413 Payload Too Large

Returned when POST body is larger than 1 MB.

Example test:

```bash
python -c "print('name=' + 'A' * 1100000 + '&email=test@test.com')" > big-body.txt
```

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-binary @big-body.txt
```

Expected status:

```bash
413 Payload Too Large
```

Remove the test file:

```bash
rm big-body.txt
```

---

### 500 Internal Server Error

Returned for unexpected server errors.

Response:

```html
<h1>500 — Server Error</h1>
<p>Server Error</p>
```

---

## 🎨 Design Features

The project has a custom Rick and Morty inspired design.

Design features include:

- dark sci-fi background
- green portal colors
- animated CSS portal
- glowing elements
- terminal-style blocks
- technology badges
- styled navigation
- styled contact form
- styled result page
- custom styled error pages
- responsive layout

---

## 🎵 Music Button Feature

The project includes a fixed music button.

The button:

- is fixed in the bottom-right corner
- uses `rick.png` as the image
- is not round
- is larger than a standard button
- stays visible while scrolling
- turns music on and off when clicked
- plays `morty.mp3`
- displays `ON` or `OFF` state

The HTML includes:

```html
<audio id="portalAudio" src="/morty.mp3" loop></audio>
```

The button uses:

```html
<img src="/rick.png" alt="Rick music button">
```

This feature is implemented with plain HTML, CSS, and JavaScript.

---

## 🧩 Main Modules

```bash
server.js
```

Creates the HTTP server and starts listening on the selected port.

```bash
routes.js
```

Handles:

- GET routes
- POST route
- static file routes
- 404 errors
- 400 errors
- 405 errors
- 413 errors
- 500 errors

```bash
htmlTemplates.js
```

Generates:

- Home page
- About page
- Contact page
- Status page
- Form submitted page
- Error pages
- Shared layout
- Header
- Footer
- Music button
- CSS styles

```bash
utils.js
```

Contains helper functions:

- `sendHtml`
- `sendFile`
- `sanitizeHtml`
- `parseRequestBody`
- `getPublicFilePath`

---

## 🧪 Manual Testing

To test the project manually, start the server:

```bash
npm start
```

Open in browser:

```bash
http://localhost:3000
```

Check these routes:

```bash
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/status
http://localhost:3000/rick.png
http://localhost:3000/morty.mp3
http://localhost:3000/unknown
```

---

## 🧪 Curl Testing

### Home page

```bash
curl -i http://localhost:3000/
```

### About page

```bash
curl -i http://localhost:3000/about
```

### Contact page

```bash
curl -i http://localhost:3000/contact
```

### Status page

```bash
curl -i http://localhost:3000/status
```

### Rick image

```bash
curl -i http://localhost:3000/rick.png
```

### Morty audio

```bash
curl -i http://localhost:3000/morty.mp3
```

### Unknown page

```bash
curl -i http://localhost:3000/unknown
```

### Valid POST request

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Rick&email=rick@portal.com"
```

### Invalid POST request: empty name

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=&email=rick@portal.com"
```

### Invalid POST request: empty email

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Rick&email="
```

### Invalid POST request: bad email

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Rick&email=bademail"
```

### XSS sanitizing test

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=<script>alert(1)</script>&email=test@test.com"
```

### Method Not Allowed test

```bash
curl -i -X DELETE http://localhost:3000/contact
```

### Payload too large test

```bash
python -c "print('name=' + 'A' * 1100000 + '&email=test@test.com')" > big-body.txt
```

```bash
curl -i -X POST http://localhost:3000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  --data-binary @big-body.txt
```

Remove test file:

```bash
rm big-body.txt
```

---

## 🖥️ Console Logging

The server logs requests in the console.

Example logs:

```bash
[2026-06-22T19:50:12.000Z] GET / - 200
[2026-06-22T19:50:18.000Z] GET /status - 200
[2026-06-22T19:50:22.000Z] POST /submit - 200
[2026-06-22T19:50:30.000Z] DELETE /contact - 405
```

This helps track requests and responses during testing.

---

## 🚀 Vercel Deployment

The project includes a `vercel.json` file.

Recommended `vercel.json` configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

After pushing changes to GitHub, Vercel can redeploy the project.

---

## 📌 Homework Requirements Covered

### 1. HTTP Server

- Server is created using the built-in `http` module
- Server listens on port `3000`
- Server supports the `PORT` environment variable

### 2. GET Requests

The server handles:

```bash
GET /
GET /about
GET /contact
GET /status
GET /rick.png
GET /morty.mp3
```

HTML pages are generated manually on the server.

Static files are served manually using built-in Node.js modules.

### 3. POST Requests

The server handles:

```bash
POST /submit
```

It parses form data using the built-in `querystring` module.

### 4. Headers

The server adds:

```bash
Content-Type
Content-Length
X-Content-Type-Options
```

### 5. Security

The server:

- validates input fields
- validates email format
- limits POST body size to 1 MB
- sanitizes input before rendering it in HTML

### 6. Manual Routing

Routing is implemented manually.

The project does not use:

```bash
Express
Fastify
Koa
third-party routing libraries
```

### 7. Error Handling

The server handles:

```bash
404 Not Found
400 Bad Request
405 Method Not Allowed
413 Payload Too Large
500 Internal Server Error
```

### 8. Modular Code Structure

The code is separated into several files:

```bash
server.js
routes.js
htmlTemplates.js
utils.js
```

### 9. Testing

The project can be tested with:

```bash
browser
curl
Postman
```

---

## 📦 Build

This project does not require a build step.

To run the server:

```bash
node server.js
```

Or:

```bash
npm start
```

---

## ✍️ Author

GitHub: MsMeow-jpg

---

## 📌 Note

This project was completed as part of a Node.js course assignment.

The main goal of the project is to practice creating a basic HTTP server using only built-in Node.js modules.

The final result is a Rick and Morty inspired portal-themed HTTP server with GET routes, POST form handling, validation, sanitization, request size limit, correct headers, static file serving, music toggle button, request logging, custom HTML pages, custom error pages, and Vercel deployment configuration.