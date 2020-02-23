<template>
    <div class="content">
        <nav-header />
        <nav-footer />
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader';
import NavFooter from './../components/NavFooter';

export default{
    name:'home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>

<style>
.content{
    text-align: center;
}
</style>