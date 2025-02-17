import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    // 解析请求 URL
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // 根据 URL 路径处理不同请求
    if (pathname === '/' && req.method === 'GET') {
        // 主页
        handleHomePage(req, res);
    } else if (pathname === '/api/items' && req.method === 'GET') {
        // 获取商品列表接口
        handleItemsApi(req, res);
    } else {
        // 默认处理
        handleNotFound(req, res);
    }
});

function handleHomePage(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>');
}

function handleItemsApi(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ items: ['item1', 'item2'] }));
}

function handleNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
}

server.listen(3000, () => {
    console.log('服务器已启动，监听在 http://localhost:3000, 可以请求 http://localhost:3000/api/items 来获取商品列表');
});
