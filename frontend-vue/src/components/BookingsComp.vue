<template>
    <div class="bookings">
      <h2>Bookings</h2>
      <form @submit.prevent="makeBooking">
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
  

    </div>
  </template>
  
  <script>

  
  export default {
    data() {
      return {
        idmenu: '',
        date: '',
        numberofpeople: '',
        numberofdogs: '',
        foodbrand: '',
        time: '',
      };
    },
    methods: {
      makeBooking(){
        this.$store.dispatch('insertBooking',{idmenu:this.idmenu,
          date:this.date,
          numberofpeople:this.numberofpeople,
          numberofdogs:this.numberofdogs,
          foodbrand:this.foodbrand,
          time:this.time})
      }
    },
  
  }

  </script>
  