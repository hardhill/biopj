<template>
    <div class="login-block">
        Регистрация
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
        <div class="input-block">
            <div>Имя</div>
            <div class="input">
                <input type="text">
            </div>
        </div>
        <button>Регистрация</button>
        <br>
        <router-link to="/login">Уже зарегистрированы?</router-link>
    </div>
</template>