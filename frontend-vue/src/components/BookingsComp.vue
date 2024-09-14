<template>
    <div class="bookings">
      <h2>Bookings</h2>
      <form @submit.prevent="createBooking">
        <select v-model="idmenu">
          <option value="1">First Course</option>
          <option value="2">Second Course</option>
          <option value="3">Third Course</option>
        </select>
        <input v-model="date" placeholder="Date" type="date" />
        <input v-model="numberofpeople" placeholder="Number of People" />
        <input v-model="numberofdogs" placeholder="Number of Dogs" />
        <input v-model="foodbrand" placeholder="Food Brand" />
        <select v-model="time">
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
        </select>
        <button type="submit">Book</button>
      </form>
  
      <h3>Your Bookings</h3>
      <ul>
        <li v-for="booking in bookings" :key="booking.idbookings">
          {{ booking.date }} - {{ booking.numberofpeople }} People, {{ booking.numberofdogs }} Dogs
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import api from '../services/api';
  
  export default {
    data() {
      return {
        idmenu: '',
        date: '',
        numberofpeople: '',
        numberofdogs: '',
        foodbrand: '',
        time: '',
        bookings: []
      };
    },
    async created() {
      try {
        const response = await api.get('/bookings');
        this.bookings = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      async createBooking() {
        try {
          await api.post('/bookings', {
            idmenu: this.idmenu,
            date: this.date,
            numberofpeople: this.numberofpeople,
            numberofdogs: this.numberofdogs,
            foodbrand: this.foodbrand,
            time: this.time
          });
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  