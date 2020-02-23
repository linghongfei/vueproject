<template>
    <div>index</div>
</template>

<script>
import storage from './../storage';

export default{
    name:'index',
    mounted(){
        storage.setItem('a',1); //新增 a:1
        storage.setItem('user',{'uaerName':'lhf','pass':123}); //新增 user:{..}
        console.log(storage.getItem('user'));
        console.log(storage.getItem('user','pass'));
        storage.clear('a'); // 删除 a
        storage.clear('pass','user'); //删除user下的pass
    }
}
</script>