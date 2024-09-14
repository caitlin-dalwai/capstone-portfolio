<template>
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
       <div style="background-image: url('https://caitlin-dalwai.github.io/capstone-imgs/pixlr-image-generator-a5021f71-bd64-48a3-a045-502b3ea68518%201.png'); width: 1440px; height: 370px;">
       </div> 
       <h1 style="font-family: Bungee Inline; font-size: 50px; color: #EB631B; margin-top: 2%; text-shadow: 3px 3px 3px black;">CANINE TRAINING</h1>
        <h5 style="font-family: Calligraffitti; font-size: 20px; margin-bottom: 2%;">Want to bring your furry friend, but they not ready, we’ve got you covered</h5>
        <div style="height: 300px; width: 1210px; background-color: #C19570; display: flex; justify-content: center; align-items: center; flex-direction: column; margin-bottom: 2%;">
            <div style="background-color: white; width: 1000px; height: 240px; display: flex; justify-content: center; align-items: center; flex-direction: column;">
                <p style="color: black; padding: 10px; font-size: 20px;">At Mates and Mutts Eatery, we are passionate about creating a space where dogs and their owners can enjoy not just meals but a range of activities that strengthen their bond. To further enhance our commitment to a dog-friendly community, we propose introducing Canine Training Services. This initiative aims to provide our customers with access to professional training sessions that focus on improving their dogs' behavior, obedience, and social skills, all within a comfortable and familiar environment</p>
            </div>

        </div>
        <h2 style="font-family: Bungee Inline; font-size: 40px; color: #AAC4E7; text-shadow: 3px 3px 3px black;">PROGRAMS</h2>
        <div class="container" style="margin-top: 3%; margin-bottom: 2%;">
      <div class="row">
        <div class="col-sm-3">
            <h5 style="font-size: 25px;">PUPPY BASICS</h5>
            <button type="button" class="btn" id="puppyModalBtn" data-bs-toggle="modal" data-bs-target="#puppyModal" style="border:10px solid black; margin-right: 1%; background-color: black; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">View more</label>
            </button>
            <div class="modal fade" id="puppyModal" tabindex="-1" aria-labelledby="puppyModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="puppyModalLabel">VIEW MORE</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid black"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: black solid 5px;">
                      <div class="card-text">
                        <p>This program is designed for puppies aged 8 weeks to 6 months. It focuses on foundational skills such as potty training, basic commands (sit, stay, come), leash walking, and socialization with other dogs and people</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-sm-3">
            <h5 style="font-size: 25px;">OBEDIENCE</h5>
            <button type="button" class="btn" id="obeModalBtn" data-bs-toggle="modal" data-bs-target="#obeModal" style="border:10px solid black; margin-right: 1%; background-color: black; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">View more</label>
            </button>
            <div class="modal fade" id="obeModal" tabindex="-1" aria-labelledby="obeModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="obeModalLabel">obe</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid black"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: black solid 5px;">
                      <div class="card-text">
                        <p>For dogs over 6 months old, this program emphasizes teaching good manners and obedience commands, such as loose leash walking, greeting guests calmly, and being well-behaved in public spaces.</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-sm-3">
            <h5 style="font-size: 25px;">TRICKS</h5>
            <button type="button" class="btn" id="tricksModalBtn" data-bs-toggle="modal" data-bs-target="#tricksModal" style="border:10px solid black; margin-right: 1%; background-color: black; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">View more</label>
            </button>
            <div class="modal fade" id="tricksModal" tabindex="-1" aria-labelledby="tricksModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="tricksModalLabel">tricks</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid black"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: black solid 5px;">
                      <div class="card-text">
                        <p>This course is for dogs who have mastered basic commands and are ready to learn more advanced skills, including complex tricks, off-leash control, and responding to commands in a variety of environments</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-sm-3">
            <h5 style="font-size: 25px;">BEHAVIOR</h5>
            <button type="button" class="btn" id="behaviorModalBtn" data-bs-toggle="modal" data-bs-target="#behaviorModal" style="border:10px solid black; margin-right: 1%; background-color: black; width: 150px; height: 58px; border-radius: 10rem;">
              <label for="button" style="font-family: Playfair Display; font-size: 18px; color: white; font-weight: bold; text-align: center">View more</label>
            </button>
            <div class="modal fade" id="behaviorModal" tabindex="-1" aria-labelledby="behaviorModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="behaviorModalLabel">BEHAVIOR</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="border:5px solid black"></button>
                  </div>
                  <div class="modal-body">
                    <div style="margin-top: 3%; border: black solid 5px;">
                      <div class="card-text">
                        <p>A specialized program for dogs with specific behavioral issues, such as excessive barking, anxiety, or aggression. This course focuses on identifying triggers and implementing techniques to manage and improve behavior</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border:5px solid black">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>