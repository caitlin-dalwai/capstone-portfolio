<template>
    <div v-if="$cookies.get('token')">
      <div>
      <BookingsComp />
      <h3>Your Bookings</h3>
      
          <table class="table" v-for="booking in bookings()" :key="booking.idbookings">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Date</th>
      <th scope="col">People</th>
      <th scope="col">Dogs</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ booking.idbookings }}</th>
      <td>{{ booking.date }}</td>
      <td>{{ booking.numberofpeople }}</td>
      <td>{{ booking.numberofdogs }}</td>
      <td><button @click="editThis = booking.idbookings" type="button" class="btn" id="editBModalBtn" data-bs-toggle="modal" data-bs-target="#editBModal" style="border:10px solid black; margin-right: 1%; background-color: black; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">View more</label>
            </button>
            <div class="modal fade" id="editBModal" tabindex="-1" aria-labelledby="editBModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editBModalLabel">EDIT BOOKING</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid black"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: black solid 5px;">
                      <div class="card-text" >
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
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black">Close</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black" @click="updateBooking(this.editThis)">submit</button>
                  </div>
                </div>
              </div>
            </div><button @click="deleteBooking(booking.idbookings)">Delete</button></td>
    </tr>
    
  </tbody>
</table>
       
    </div>
  </div>
  <div v-else>
    <h1 class="mt-5">Please <router-link to="/register">SIGN IN </router-link>to view your bookings</h1>


  </div>
  </template>
  
  <script>
  import BookingsComp from '../components/BookingsComp.vue';
  
  export default {
    components: {
      BookingsComp
    },
    data() {
      return {
        idmenu: '',
        date: '',
        numberofpeople: '',
        numberofdogs: '',
        foodbrand: '',
        time: '',
        editThis:null,

      }
    },
    methods: {
      bookings(){
        return this.$store.state.bookings
      },
      triggerBooking(){
        this.$store.dispatch('getBookings')
      },
      deleteBooking(id){
        this.$store.dispatch('deleteBooking',{idbookings:id})
      }, 
      updateBooking(id){
        console.log(id)
        this.$store.dispatch('updateBooking',{idbookings:id,idmenu:this.idmenu,date:this.date,numberofpeople:this.numberofpeople,numberofdogs:this.numberofdogs,foodbrand:this.foodbrand,time:this.time})
      }
    },
    mounted() {
      this.triggerBooking()
      this.bookings()
    },
  }
  </script>
  