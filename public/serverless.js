
const NextServer = require('next/dist/server/next-server').default;
const serverless = require('serverless-http');
const { config } = require('../required-server-files.json');

const nextServer = new NextServer({
    dev: false,
    conf: config
});

module.exports.handler = serverless(nextServer.getRequestHandler());