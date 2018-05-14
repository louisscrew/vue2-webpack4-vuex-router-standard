<template>
    <div id="hello">
        <img :src="logoUrl" alt="logo">
        <img src="../assets/images/logo.png" alt="logo">
        <p>Hello,this page is developed by vue2.5.x and webpack4.x</p>
    </div>
</template>
<script>
import logoUrl from '../assets/images/logo.png';
export default {
    name:'hello',
    data(){
        return {
            logoUrl
        }
    }
}
</script>
