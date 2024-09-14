<template>
    
    <footer class="footerContainer">
          <div class="foot-containing">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-5">
                    <h2 class="footer-heading mb-4" style="margin-top: 3%;">Find Us</h2>
                    <div style="display: flex; align-items: center; margin-left: 25%;">
  <img src="https://caitlin-dalwai.github.io/imgs-fin/Vector%20(1).png" alt="" >
  <p style="margin-top: 4%; margin-left: 2%;">South Africa, Cape Town</p>
</div>
<div style="display: flex; align-items: center; margin-left: 25%;">
  <img src="https://caitlin-dalwai.github.io/imgs-fin/Vector.png" alt="" >
  <p style="margin-top: 4%; margin-left: 2%;">+27 78 450 1234</p>

</div>
<div style="display: flex; align-items: center; margin-left: 25%;">
  <img src="https://caitlin-dalwai.github.io/imgs-fin/Vector (2).png" alt="" >
  <p style="margin-top: 4%; margin-left: 2%;">aniversecorp@gmail.com</p>

</div>
                    
                  </div>
                  <div class="col-md-3 ml-auto">
                    <h2 class="footer-heading mb-4" style="margin-top: 3%;">Features</h2>
                    <ul class="list-unstyled">
                      <li><a class="nav-link" href="/about">About Us</a></li>
                      <li><a class="nav-link" href="/products">Products</a></li>
                      <li><a class="nav-link" href="/contact">Contact Us</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <h2 class="footer-heading mb-4" style="margin-top: 3%;">Follow Us</h2>
                    <a href="https://github.com/King20Jamin" class="nav-links"><img src="https://caitlin-dalwai.github.io/imgs-fin/icons8-git-24%201.png" alt=""></a>
                    <a href="https://www.linkedin.com/in/jamin-langeveldt-04b304289/?originalSubdomain=za" class=" nav-links"><img src="https://caitlin-dalwai.github.io/imgs-fin/icons8-linkedin-50 1.png" alt=""></a>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h2 class="footer-heading mb-4" style="margin-top: 3%;">Email Us</h2>
                <form action="mailto:langeveldt20jamin@gmail.com, dalwaicaitlin@gmail.com" method="post" class="subcription-form">
                  <div class="input-group mb-3">
                    <input type="text" class="form-control border-danger text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" style="color: black;">
                    <div class="input-group-append" style="background-color: #23252B;">
                      <button class="btn btn-danger text-white" type="button" id="button-addon2" >Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row pt-5 mt-5 text-center">
              <div class="col-md-12">
                <div class="border-top pt-5">
                  <p>Copyright &copy; {{cYear}} All Rights Reserved. &mdash; Designed by Caitlin & King:crown:Legend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </template>
      <script>
      export default {
          name: "FooterComp",
          data(){
              return{
                  cYear: new Date().getUTCFullYear()
              }
          }
      }
      </script>
      <style scoped>
      /* Footer styling */
    .footerContainer {
        padding: 20px;
        font-family: "Playfair Display";
      font-weight: 400;
      font-style: normal;
          font-size: 15px;
          background-color: #453F3C;
          color: white;
      }
      /* About me section */
      .footerContainer .about-me {
        float: left;
        width: 20%;
      }
      /* Features section */
      .footerContainer .features {
        float: left;
        width: 20%;
        color: white;
      }
      /* Follow me section */
      .footerContainer .follow-me {
        float: left;
        width: 20%;
        color: white;
      }
      /* Email me section */
      .footerContainer .email-me {
        float: right;
        width: 10%;
        color: white;
      }
      .subcription-form {
        background-color: white;
        color: white;
      }
      /* Email input field */
      .footerContainer .email-input {
        padding: 10px;
        margin-right: 10px;
        color:white;
      }
      /* Send button */
      .footerContainer .send-button {
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }
      /* Clear floats */
      .footerContainer .clearfix::after {
        content: "";
        clear: both;
        display: table;
      }
      /* Copyright notice */
      .footerContainer .copyright {
        text-align: center;
        font-size: 12px;
        margin-top: 20px;
        color: white;
      }
      /*icons*/
      .nav-links{
        color: white;
        padding: 10px;
        text-decoration: none;
      }
      p{
        color:white;
      }
      h2{
        color:white;
      }
      </style>