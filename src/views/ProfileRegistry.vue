<template>
  <div class="container">
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
          <button type="submit">Регистрация</button>
          <router-link to="/login">Уже зарегистрированы?</router-link>
        </div>
      </div>
    </form>
  </div>
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
.container {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: rgb(68, 0, 95);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-block {
  padding: 1em;
  min-width: 500px;
  background-color: white;
  border-radius: 5px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  .input-block {
    margin: 1em 0;
    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      small {
        margin-top: 0.3em;
      }
    }
  }
}
.footer {
  display: flex;
  flex-direction: column;
}

@media (max-width: 760px) {
  .container {
    height: 100vh;
  }
  .login-block {
    margin: 0;
    min-width: 350px;
  }
}

// -----------------------
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  /* отображаем курсор в виде руки при наведении; некоторые
     считают, что необходимо оставлять стрелочный вид для кнопок */
  cursor: pointer;
  background-color: #7952b3;
  border-radius: 5px;
  padding: 0.3em 4em;
  margin: 1em auto;
  max-width: 150px;
}
input {
  border: 1px solid #cccccc;
  border-radius: 3px;
  outline: none; // удаляет обводку в браузерах хром(желтая) и сафари(синяя)
  height: 30px; // высота на свое усмотрение
  width: 250px; // ширина на свое усмотрение
  font-size: 0.9rem;
  font-family: Tahoma; // Стиль шрифта

  margin-top: 0.3em;
}
.invalid {
  // background-color: rgb(216, 64, 64);
  border-color: #ff5454;
}
</style>