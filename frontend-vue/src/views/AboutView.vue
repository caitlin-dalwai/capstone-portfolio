<template>
  <div class="about" style="background-image: url('https://caitlin-dalwai.github.io/capstone-imgs/about.png') !important; background-size: cover !important; background-repeat: no-repeat !important; width: 1440px !important; height: 706px !important; display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <h1 style="font-family: Bungee Inline; font-size: 100px; color: white; text-shadow: -6px -6px 0 #EB631B, 6px -6px 0 #EB631B, -6px 6px 0 #EB631B, 6px 6px 0 #EB631B;">ABOUT</h1>
    <svg @click="scrollToNextSection" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#EB631B" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" style="margin-top: 20px; cursor: pointer;">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
    </svg>
  </div>
  <div ref="nextSection" style="background-image: url('https://caitlin-dalwai.github.io/capstone-imgs/Desktop%20-%202%20(2).png') !important; background-size: cover !important; background-repeat: no-repeat !important; width: 1440px !important; height: 706px !important; display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <div style="background-color: #C19570; width: 1210px; height: 545px;  display: flex; justify-content: center; align-items: center; flex-direction: column;">
      <div style="background-color: #EBEBDF; width: 1074px; height: 430px;  display: flex; justify-content: center; align-items: center; flex-direction: column; ">
        <p style="font-size: 18px; color: black; padding: 10px;">
Welcome to Mates and Mutts Eatery, the first of its kind in the country—a restaurant where dogs and their humans dine together in a friendly and welcoming environment. At our eatery, we believe that every meal should be a shared experience, not just for people but for their canine companions too. We are passionate dog lovers, just like you, and we know how much joy our furry friends bring into our lives. That's why we've created a unique dining destination that celebrates this special bond.
At Mates and Mutts Eatery, we offer a one-of-a-kind experience where you can enjoy a delicious meal with your dog right by your side. Our specialized dog menu is thoughtfully curated to cater to every pup's dietary needs and preferences.  we've got something for every tail-wagger. But we haven't forgotten about our human guests! Our menu is just as diverse, offering a range of delicious dishes that are sure to delight your taste buds. From mouth-watering appetizers to satisfying main courses and indulgent desserts, our culinary team has created a menu that combines fresh, locally sourced ingredients with innovative flavors.
At Mates and Mutts Eatery, we are more than just a restaurant; we are a community of dog lovers who understand the joy of sharing a meal with your best friend. </p>
      </div>
      
    </div>
  </div>
  <div style="background-color: #EB631B; width: 1440px; height: 400px;">
    <h1 style="font-family: Bungee Inline; font-size: 50px; color: white; font-weight: bolder; text-shadow: 3px 3px 3px black;">ADDITIONAL</h1>
    <div class="container" style="margin-top: 3%;">
      <div class="row">
        <div class="col-sm-4">
          <router-link class="nav-link text-black" to="/menu" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" ><img src="https://caitlin-dalwai.github.io/capstone-imgs/Group%204.png" alt=""></router-link>                   
        </div>
        <div class="col-sm-4">
          <router-link class="nav-link text-black" to="/training" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" ><img src="https://caitlin-dalwai.github.io/capstone-imgs/trainig%201.png" alt=""></router-link>                   
        </div>
        <div class="col-sm-4">
          <router-link class="nav-link text-black" to="/facilities" style="font-size: 20px; font-family: Bungee Inline; text-shadow: 3px 3px 3px white;" ><img src="https://caitlin-dalwai.github.io/capstone-imgs/Group%2018.png" alt=""></router-link>                   
        </div>
      </div>
    </div>
  </div>
  <div style="width: 1440px; height: 704px; background-color: #EBEBDF;">
    <h1 style="font-family: Bungee Inline; font-size: 50px; color: black; font-weight: bolder; text-shadow: 3px 3px 3px black;">MEET THE TEAM</h1>
    <div class="container" style="margin-top: 3%;">
      <div class="row">
        <div class="col-sm-4">
          <img src="https://caitlin-dalwai.github.io/capstone-imgs/Group%2011.png" alt="">
          <h1 style="font-size: 30px; font-family: Bungee Inline; font-weight: bolder;">HEAD CHEF</h1>
          <h5 style="font-size: 20px; font-family: Bungee Inline;">NANCY JACOBS</h5>
        </div>
        <div class="col-sm-4">
          <img src="https://caitlin-dalwai.github.io/capstone-imgs/caity%20boo%201.png" alt="">
          <h1 style="font-size: 30px; font-family: Bungee Inline; font-weight: bolder;">OWNER</h1>
          <h5 style="font-size: 20px; font-family: Bungee Inline;">CAITLIN DALWAI</h5>

        </div>
        <div class="col-sm-4">
          <img src="https://caitlin-dalwai.github.io/capstone-imgs/image%203.png" alt="">
          <h1 style="font-size: 30px; font-family: Bungee Inline; font-weight: bolder;">HEAD TRAINER</h1>
          <h5 style="font-size: 20px; font-family: Bungee Inline;">SIYA BANDA</h5>

        </div>
      </div>

      </div>
      <h1 style="font-family: Bungee Inline; font-size: 50px; color: #EB631B; font-weight: bolder; margin-top: 2%; text-shadow: 3px 3px 3px black;">PARTNERSHIPS</h1>
      <h5 style="font-family: Calligraffitti; font-size: 20px;">Click on brand to read more</h5>

      <div class="container" style="margin-top: 3%;">
        <div class="row">
          <div class="col-sm">
            <a href="https://www.eukanuba.com/za/why-eukanuba" target="_blank" ><img src="https://caitlin-dalwai.github.io/capstone-imgs/image%205.png" alt=""></a> 
          </div>
          <div class="col-sm">
            <a href="https://www.hillspet.co.za/about-us/nutritional-philosophy/ingredients" target="_blank"><img src="https://caitlin-dalwai.github.io/capstone-imgs/image%204.png" alt=""></a>
          </div>
          <div class="col-sm">
            <a href="https://www.royalcanin.com/za/tailored-nutrition" target="_blank"><img src="https://caitlin-dalwai.github.io/capstone-imgs/image%207.png" alt=""></a>
          </div>
          <div class="col-sm">
            <a href="https://www.montego.co.za/why-montego/" target="_blank"><img src="https://caitlin-dalwai.github.io/capstone-imgs/image%206.png" alt=""></a>
          </div>
          <div class="col-sm">
            <a href="https://purina.com/nutrition" target="_blank"><img src="https://caitlin-dalwai.github.io/capstone-imgs/image%208.png" alt=""></a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToNextSection() {
      const nextSection = this.$refs.nextSection;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped >

</style>
