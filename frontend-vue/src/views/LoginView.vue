<template>
  <div class="login">
    <div class="form">
      <ul class="tab-group">
        <li class="tab active"><a href="#signup" @click="switchTab">Sign Up</a></li>
        <li class="tab"><a href="#login" @click="switchTab">Log In</a></li>
      </ul>
      <div class="tab-content">
        <!-- Sign-up form -->
        <div id="signup">
          <h1>Sign Up for Free</h1>
          <form @submit.prevent="registerUser">
            <div class="top-row">
              <div class="field-wrap">
                <label :class="{ active: isActive }">First Name<span class="req">*</span></label>
                <input v-model="first_name" type="text" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
              </div>
              <div class="field-wrap">
                <label :class="{ active: isActive }">Last Name<span class="req">*</span></label>
                <input v-model="last_name" type="text" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
              </div>
            </div>
            <div class="field-wrap">
              <label :class="{ active: isActive }">Email Address<span class="req">*</span></label>
              <input v-model="email" type="email" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
            </div>
            <div class="field-wrap">
              <label :class="{ active: isActive }">Set A Password<span class="req">*</span></label>
              <input v-model="password" type="password" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
            </div>
            <button type="submit" class="button button-block">Get Started</button>
          </form>
        </div>
        <!-- Login form -->
        <div id="login" style="display:none;">
          <h1>Welcome Back!</h1>
          <form @submit.prevent="loginUser">
            <div class="field-wrap">
              <label :class="{ active: isActive }">Email Address<span class="req">*</span></label>
              <input v-model="login_email" type="email" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
            </div>
            <div class="field-wrap">
              <label :class="{ active: isActive }">Password<span class="req">*</span></label>
              <input v-model="login_password" type="password" required autocomplete="off" @focus="activateLabel" @blur="deactivateLabel" />
            </div>
            <p class="forgot"><a href="#">Forgot Password?</a></p>
            <button class="button button-block">Log In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "LoginView",
  data() {
    return {
      isActive: false,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      login_email: '',
      login_password: '',
    };
  },
  methods: {
    activateLabel(event) {
      const label = event.target.previousElementSibling;
      if (label) {
        label.classList.add("active");
        this.isActive = true;
      }
    },
    deactivateLabel(event) {
      const label = event.target.previousElementSibling;
      if (label && event.target.value === "") {
        label.classList.remove("active");
        this.isActive = false;
      }
    },
    switchTab(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
      event.target.parentNode.classList.add("active");
      document.querySelectorAll(".tab-content > div").forEach(div => {
        div.style.display = "none";
      });
      document.getElementById(targetId).style.display = "block";
    },
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          first_name: this.name,
          last_name: this.surname,
          email: this.email,
          password: this.password,
          image: this.profilepic
        });
        alert('Registration successful!');
        console.log(response.data);
      } catch (error) {
        console.error('Registration error:', error);
        alert('Error during registration');
      }
    },
    async loginUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          email: this.login_email,
          password: this.login_password,
        });
        alert('Login successful!');
        console.log(response.data);
      } catch (error) {
        console.error('Login error:', error);
        alert('Error during login');
      }
    },
  },
};
</script>
<style scoped>
body {
  background: #C1BDBA;
  font-family: 'Titillium Web', sans-serif;
}
.login{
  padding-top: 10rem;
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}
a {
  text-decoration: none;
  color: pink;
  transition: .5s ease;
}
a:hover {
  color: #EB631B; /* Darkened version of #1AB188 */
}
.form {
  background: rgba(112, 112, 112, 0.19);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, .3);
}
.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group li {
  float: left;
  width: 50%;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.388);
  color: white;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: .5s ease;
}
.tab-group li a:hover {
  background: #EB631B; /* Darkened version of #1AB188 */
  color: #FFFFFF;
}
.tab-group .active a {
  background: #EB631B;
  color: #FFFFFF;
}
.tab-content > div {
  display: none;
}
.tab-content > div:first-child {
  display: block;
}
h1 {
  text-align: center;
  color: #fff;
  font-weight: 300;
  margin: 0 0 40px;
}
label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgb(174, 174, 174);
  transition: all 0.25s ease;
  pointer-events: none;
}
label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}
label .req {
  margin: 2px;
  color: rgb(180, 29, 29);
}
input, textarea {
  display: block;
  width: 100%;
  padding: 5px 10px;
  background: none;
  border: 1px solid #A0B3B0;
  color: #FFFFFF;
  border-radius: 0;
  transition: border-color .25s ease, box-shadow .25s ease;
}
input:focus {
  outline: 0;
  border-color: pink;
}
textarea {
  border: 2px solid rgb(46, 46, 46);
  resize: vertical;
}
.field-wrap {
  position: relative;
  margin-bottom: 40px;
}
.top-row {
  overflow: hidden;
}
.top-row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.top-row > div:last-child {
  margin: 0;
}
.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background: #EB631B;
  color: #FFFFFF;
  transition: background .5s ease;
}
.button:hover, .button:focus {
  background: #c79a3167; /* Darkened version of #1AB188 */
}
.button-block {
  display: block;
  width: 100%;
}
.forgot {
  margin-top: -20px;
  text-align: right;
}
</style>