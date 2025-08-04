console.log('Builder.io Desktop App starting...');

// Basic HTTP server
const http = require('http');
const port = process.env.PORT || 5193;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Builder.io Desktop App</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .container { max-width: 600px; margin: 0 auto; text-align: center; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Builder.io Desktop App</h1>
            <p>The app is now running successfully!</p>
            <p>Port: ${port}</p>
        </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}/\`);
});