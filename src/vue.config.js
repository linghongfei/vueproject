module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{ //代理
            '/api':{
                target:'https://www.baidu.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}