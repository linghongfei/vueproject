import Mock from 'mockjs';

Mock.mock('/api/login',{
    "status":0,
    "data":{
        "id|10001-11000":1,
        "username":"@cname",
        "phone":"1234567890"
    },
    "msg":"massage"
})