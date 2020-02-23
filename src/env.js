let baseURL;

switch(process.env.NODE_ENV){ //node js 环境变量
    case 'development': //开发环境
        baseURL = 'http://mock-api.com/5g7xEZne.mock';
        break;
    case 'test': //测试环境
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'production': //线上环境
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    case 'prev': //预发布
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    default: 
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}