const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/hd', 
    createProxyMiddleware({ 
              target: 'http://localhost:5555',
              changeOrigin: true,
              pathRewrite:{
                  "^/hd":"/"
              } 
            }
         ));
}