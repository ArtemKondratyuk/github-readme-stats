// netlify/function/api/hendler.js
const { createServer } = require('../../api'); // Подключение главного приложения из репозитория


exports.handler = async (event) => {
    const server = createServer();

    return new Promise((resolve) => {
        server.inject(
            {method: event.httpMethod, url: event.path },
            (err, res) => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: res.payload
                });
            }
        );
    });
};