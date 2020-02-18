module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/search':{
                target:'https://www.imooc.com', //目标地址
                changeOrigin:false
            }
        }
    }
}