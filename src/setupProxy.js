const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/hd', 
    createProxyMiddleware({ 
              target: 'http://47.113.120.143:5555',
              changeOrigin: true,
              pathRewrite:{
                  "^/hd":"/"
              } 
            }
         ));
}