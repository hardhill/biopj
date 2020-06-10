<template>
    <div class="login-block">
        <div class="input-block">
            <div>Логин</div>
            <div class="input">
                <input type="text">
            </div>
        </div>
        <div class="input-block">
            <div>Пароль</div>
            <div class="input">
                <input type="text">
            </div>
        </div>
        <div class="enter">Войти</div>
    </div>
</template>

<style lang="scss" scoped>
.login-block{
    width: 500px;
    border: 1px solid black;
    margin: auto;
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