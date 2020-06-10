<template>
  <form @submit.prevent="onSubmit">
    <div class="login-block">
      Вход
      <div class="input-block">
        <div>Логин</div>
        <div class="input-form">
          <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          />
          <small v-if="$v.email.$dirty && !$v.email.required">Введите Email !</small>
          <small v-else-if="$v.email.$dirty && !$v.email.email">Email введен не правильно!</small>
        </div>
      </div>
      <div class="input-block">
        <div>Пароль</div>
        <div class="input-form">
          <input
            id="password"
            type="text"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          />
          <small v-if="$v.password.$dirty && !$v.password.required">Введите пароль !</small>
          <small
            v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть больше {{$v.password.$params.minLength.min}} символов</small>
        </div>
      </div>
      <button>Войти</button>
      <br />
      <router-link to="/registry">Еще не зарегистрированы?</router-link>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: () => ({
    email: "",
    password: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$router.push("/tests");
      console.log(formData);
    }
  }
};
</script>

<style lang="scss">
</style>