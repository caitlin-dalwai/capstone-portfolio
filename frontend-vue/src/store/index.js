import { createStore } from 'vuex'
import router from '@/router'
import cookies from 'vue-cookies'
let apiUrl = 'https://capstone-portfolio-37cb.onrender.com' 
// let apiUrl = 'http://localhost:7777' 
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
    },
    async loginUser({commit}, {email, password}){
      const requestOptions = {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        },
      body:JSON.stringify({
        email, password
      })
    }
    let data = await (await fetch(`${apiUrl}/users/login`, requestOptions)).json()
    try{
      let token = data.token
      cookies.set('token', token, '1h')
      alert(data.message)  
      if (data.message == 'You are signed in') {
        commit('setServeResponse', token)
        console.log(token)
        await router.push('/bookingv')   
      }
     
      } catch(error){
        alert(error)
      }
    // alert(data.message)
    // commit('setServeResponse', data)
    },
    async registerUser({commit}, {email, password,name, surname}){
      const requestOptions = {
        method: "POST",
        credentials:'include',
        headers: { "Content-Type": "application/json" ,
          "Authorization": `${cookies.get('token')}`,
          'cookie': cookies.get('token')
        },
      body:JSON.stringify({
        email, password, name, surname, profilepic:'https://i.pinimg.com/originals/db/73/58/db7358595d4a40c14f74c35726f69376.jpg'
      })
    }
    let data = await (await fetch(`${apiUrl}/users/insert`, requestOptions)).json()
    console.log(data)
    alert(data.message)
    commit('setServeResponse', data)
    }
  },
  modules: {
  }
})
