const { override, fixBabelImports,addLessLoader,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const{resolve}=require('path')     
module.exports = override(
  addDecoratorsLegacy(), //装饰器语法
			       fixBabelImports('import', {
			         libraryName: 'antd',
			         libraryDirectory: 'es',
			         style: true,
			       }),
                   addLessLoader({
                    javascriptEnabled: true,
                    modifyVars: { '@primary-color': '#00F' },
                  }),
                 addWebpackAlias({ //改名：如果目录很深就方便了
                     '@':resolve('src')
                 })
                 );