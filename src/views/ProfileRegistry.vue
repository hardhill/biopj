<template>
  <form @submit.prevent="onSubmit">
    <div class="login-block">
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
      <div class="footer">
        <router-link to="/login">Уже зарегистрированы?</router-link>
        <button type="submit">Регистрация</button>
      </div>
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
    name: { required }
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      };

      await this.$store.dispatch("register", formData);

      this.$router.push("/tests");
    }
  }
};
</script>
<style lang="scss" scoped>
.login-block {
  max-width: 450px;
  // border: 2px solid rgb(99, 0, 192);
  border-radius: 5px;
  // background-color: #7952b3;
  margin: 0 2em;
  margin-top: 3em;
}

@media (max-width: 760px) {
  .login-block {
    margin: 0;
  }
}

.input-block {
  margin: 1em;
  div {
    font-size: 1.2rem;
    display: flex;
  }
}
.enter {
  border: 1px solid black;
  margin: auto;
  width: 100px;
}

.input-form {
  display: flex;
  align-items: center;

  small {
    margin-left: 1em;
    font-size: 0.9rem;
  }
}

.footer {
  display: flex;
  // justify-content: space-between;
  padding: 0 1em;
  button {
    margin-left: 2em;
  }
}
// -----------------------
input {
  border: 1px solid #cccccc;
  border-radius: 3px;
  outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
  height: 30px; // высота на свое усмотрение
  width: 200px; // ширина на свое усмотрение
  font-size: 0.9rem;
  font-family: Tahoma; // Стиль шрифта
}
.invalid {
  // background-color: rgb(216, 64, 64);
  border-color: #ff5454;
}
</style>