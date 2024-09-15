<template>
  <div class="home" style="padding: 0px; margin-left: 0px !important; margin-right: 0px; margin-bottom: 2%;">
  
  
    <div class="container">
        <div class="row">
            <div class="col align-self-start" style="background-color: #C19570; width: 330px; height: 630px; position: absolute; left: 0; border: #EB631B solid 7px !important;">
              <h1 class=" mb-3 w-100" style="margin-top: 20%; font-size: 30px; font-family: Bungee Inline; color: black;">VIEW MORE</h1>

<ul class="nav flex-column w-100">
  <li class="nav-item mb-2" style="border: 2px solid black;">
    <router-link class="nav-link text-black" to="/menu" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" >Menu</router-link>                   
   </li>

  
  <li class="nav-item mb-2" style="border: 2px solid black;">
    <router-link class="nav-link text-black" to="/training" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" >Canine Training</router-link>                   
  </li>
  <li class="nav-item mb-2" style="border: 2px solid black;">
    <router-link class="nav-link text-black" to="/facilities" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" >Facilities</router-link>                   
  </li>
</ul>

<button class="btn mt-auto w-100" style="font-size: 20px; font-family: Bungee Inline; background-color: #EB631B; height: 58px !important; width: 161px !important; border: #EB631B 3px solid; border-radius: 100%; color: white;" @click="pushTo('/bookingv')">BOOK NOW</button>

            </div>
            <div class="col align-self-end" style="margin-left: 25%; margin-top: 4%;">
              <h1 style="width: 920px !important; font-family: Bungee Inline; font-weight: bolder; color: white; text-shadow: 3px 3px 3px black;">MATES AND MUTTS EATERY</h1>
              <h6 style="font-family: Calligraffitti;" id="subH">Where Every Meal is a Tail-Wagging Experience!</h6>
              <CarrouselComp/>
            </div>
        </div>
    </div>
  </div>
    
  
</template>

<script>
import CarrouselComp from '@/components/CarrouselComp.vue';
import router from '@/router'

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    CarrouselComp
  },
  methods:{
    pushTo(route) {
      router.push(route)
  }
}
}
</script>
<style scoped>
  /* @media (max-width: 300px){
    #subH{
      margin-left: 100% !important;
      width: 300px !important;
    }
  }

  @media (max-width: 720px){
    
  } */
</style>
