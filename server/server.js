/**
 * A custom server cannot be deployed to Vercel
 */

require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.disable('x-powered-by');

    // health check api's
    server.get('/ping', (req, res) => {
      res.status(200).send('pong');
    });
    server.get('/health', (req, res) => {
      res.status(200).send('success');
    });

    // parse application/json
    server.use(bodyParser.json());

    // proxy api
    server.use('/proxy-api', createProxyMiddleware({
      target: 'https://www.googletagmanager.com',
      changeOrigin: true
    }));

    // routes
    server.all('*', (req, res) => {
      return handle(req, res);
    });

    // server start
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
