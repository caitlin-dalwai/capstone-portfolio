<template>
    <div class="profile">
      <h2>My Profile</h2>
      <div v-if="profile">
        <p><strong>Email:</strong> {{ profile.email }}</p>
        <p><strong>Name:</strong> {{ profile.name }} {{ profile.surname }}</p>
        <img :src="profile.profilepic" alt="Profile Picture" />
      </div>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        profile: null
      };
    },
    async created() {
      try {
        const response = await api.get('/users/profile');
        this.profile = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  };
  </script>
  