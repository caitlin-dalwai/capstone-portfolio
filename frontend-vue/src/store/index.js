import { createStore } from 'vuex'
import cookies from 'vue-cookies'
let apiUrl = 'http://localhost:7777' 
export default createStore({
  state: {
    bookings:[],
    response:null,
  },
  getters: {
  },
  mutations: {
    setBookings(state, payload){
      state.bookings= payload
    },
    setServeResponse(state, payload){
      state.response = payload
    }
  },
  actions: {
    async getBookings({commit}){
      const requestOptions = {
        method: "GET",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        }} 
      let response = await fetch(`${apiUrl}/bookings`, requestOptions)
      let data = await response.json()
      console.log(data)
      commit('setBookings', data)

        
    },
    async insertBooking({commit}, {idmenu,date,numberofpeople,numberofdogs,foodbrand,time}){
        const requestOptions = {
          method: "POST",
          credentials:'include',
          headers: { "Content-Type": "application/json" ,
            "Authorization": `${cookies.get('token')}`,
            'cookie': cookies.get('token')
          },
        body:JSON.stringify({
          idusers:1,idmenu,date,numberofpeople,numberofdogs,foodbrand,time
        })
      } 
      let data = await ((await fetch(`${apiUrl}/bookings/insert`, requestOptions))).json()
      console.log(data)
      commit('setServeResponse', data)
    },
    async deleteBooking({commit},{idbookings}){
      const requestOptions = {
        method: "DELETE",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        }}
      let data = await(await fetch(`${apiUrl}/bookings/${idbookings}`, requestOptions)).json()
      commit('setBookings',data.data)
      alert(data.message);
      

    },
    async updateBooking({commit}, {idbookings,idmenu,date,numberofpeople,numberofdogs,foodbrand,time}){
      let userid = 2
      const requestOptions = {
        method: "PATCH",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        },
      body:JSON.stringify({
        userid,idmenu,date,numberofpeople,numberofdogs,foodbrand,time
      })
    }
      let data = await (await fetch(`${apiUrl}/bookings/${idbookings}`, requestOptions)).json()
      alert(data.message)
      commit('setBookings',data.data)
    }
  },
  modules: {
  }
})
