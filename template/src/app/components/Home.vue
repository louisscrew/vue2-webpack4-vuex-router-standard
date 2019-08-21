<style lang="less" scoped>

.home-cust-css{
    div.home-color{
        color: #ff0000;
    }
}

</style>
<template>
    <div class="home-cust-css">
        <div class="home-color">{{ msg }}</div>
    </div>
</template>
<script>
export default {
    name: "Home",
    data () {
        return {
            msg:"hello Home"
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
