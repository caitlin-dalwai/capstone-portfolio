<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" placeholder="Email" type="email" />
        <input v-model="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await api.post('/users/loginnm,', {
            email: this.email,
            password: this.password
          });
          localStorage.setItem('token', response.data.token);
          this.$router.push('/profile');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  

   