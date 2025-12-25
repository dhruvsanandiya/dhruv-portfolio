const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy Netlify functions to netlify dev server (runs on port 8888)
  // This allows react-scripts start to work with Netlify functions
  // NOTE: It's recommended to use "npm run dev" instead, which runs netlify dev
  app.use(
    '/.netlify/functions',
    createProxyMiddleware({
      target: 'http://localhost:8888',
      changeOrigin: true,
      logLevel: 'debug',
      ws: false, // Disable websocket proxying
      onError: (err, req, res) => {
        console.error('Proxy error:', err.message);
        console.error('Make sure netlify dev is running on port 8888, or use "npm run dev" instead of "npm start"');
        if (!res.headersSent) {
          res.status(503).json({
            error: 'Netlify functions server not available. Please run "npm run dev" to start the development server with function support.',
          });
        }
      },
      onProxyRes: (proxyRes, req, res) => {
        // Log proxy response errors for debugging
        if (proxyRes.statusCode === 405) {
          console.error('405 Method Not Allowed from Netlify function - check function configuration');
        }
      },
    })
  );
};

