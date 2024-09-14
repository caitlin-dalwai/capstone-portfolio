<template>
    <div id="carrousel" >
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div class="carousel-inner" style="width: 920px !important;">
          <div class="carousel-item active">
            <div class="overlay-container" style="width: 920px !important;">
              <img src="https://caitlin-dalwai.github.io/capstone-imgs/Untitled%20design%20(10)%201.png" class="d-block w-100" alt=" ">

            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
                <img src="https://caitlin-dalwai.github.io/capstone-imgs/There's%20A%20Restaurant%20That%20Has%20A%20Brunch%20Menu%20For%20Dogs%20Complete%20With%20Cocktails%201.png" class="d-block w-100" alt=" ">

            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://caitlin-dalwai.github.io/capstone-imgs/Untitled%20design%20(8)%201.png" class="d-block w-100" alt=" ">
              
            </div>
          </div>
          <div class="carousel-item">
            <div class="overlay-container">
              <img src="https://caitlin-dalwai.github.io/capstone-imgs/pixlr-image-generator-ddc2a9d7-2e14-443f-aaf4-4cafe46ab729%201.png" class="d-block w-100" alt=" ">
              
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'CarrouselComp'
}
</script>
<style scoped >
    @media (max-width: 300px) {
    .carousel-inner {
      width: 150px !important;
    }

    .overlay-container {
      width: 150px !important;
    }

    .overlay-container img {
      width: 150px !important;
    }

    #carrousel{
        margin-left: 80% !important;
    }
    .carousel-item{
        width: 200px !important;
    }
  }

  @media (max-width: 720px){
    .carousel-inner {
      width: 70% !important;
    }

    .overlay-container {
      width: 70% !important;
    }

    .overlay-container img {
      width: 70% !important;
      height: auto;
    }
    #carrousel{
        margin-left: 15% !important;
    }
}
</style>