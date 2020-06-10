<template>
  <form @submit.prevent="onSubmit">
    <div class="login-block">
      Регистрация
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
      <div class="input-block">
        <div>Имя</div>
        <div class="input-form">
          <input
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
          />
          <small v-if="$v.name.$dirty && !$v.name.required">Введите имя !</small>
        </div>
      </div>
      <button type="submit">Регистрация</button>
      <br />
      <router-link to="/login">Уже зарегистрированы?</router-link>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "registry",
  data: () => ({
    email: "",
    password: "",
    name: ""
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: {required}
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };
      this.$router.push("/tests");
      console.log(formData);
    }
  }
};
</script>
