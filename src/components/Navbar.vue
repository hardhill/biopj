<template>
    <nav>
        <div> 
            <router-link tag="span" :to="'/theory'">
                Теория
            </router-link>
            <router-link tag="span" :to="'/tests'">
                Тесты
            </router-link>
        </div>
        <div>
            <router-link tag="span" :to="'/profile'">
                Вход
            </router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav{
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    padding: 1em 3em;

    
    span:not(:first-child){
        padding-left: 1.5em;   
    }
    span{
        cursor: pointer;
    }
}
</style>