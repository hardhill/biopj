<template>
    <div>
        <navbar></navbar>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'main-layout',
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
.login-block{
    width: 500px;
    border: 1px solid black;
    margin: auto;
    margin-top: 1em;
}
.input-block{
    margin: 1em;
    div{
        font-size: 1.2rem;
        display: flex;
        
    }
    input{
        margin-top: 1em;

    }
}
.enter{
    border: 1px solid black;
    margin: auto;
    width: 100px;
}
</style>