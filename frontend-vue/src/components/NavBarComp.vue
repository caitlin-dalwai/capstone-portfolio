<template>
    <div id="nav">
<div class="fixed-top">
  <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="navbar-brand" to="/">
                <img src="https://caitlin-dalwai.github.io/capstone-imgs/dogline%201.png" loading="lazy" alt="logo" style="border-radius: 50%; border: solid white 2px;">
            </router-link>
                     </li>
                    <li class="nav-item">
                      <router-link class="nav-link"  :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
                    </li>
                    
                     <li class="nav-item">
                     <router-link class="nav-link" :class="{ active: $route.path=== '/register' }" id="col" to="/register">Register</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Contact</router-link>
                    </li>
                    <ul class="admin-icon">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin"><i class="bi bi-person-circle icon"></i></router-link>
                    </li>
                </ul>
                </ul>
            </div>
        </div>
    </nav>
    <div class="color-gradient">
    </div>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style>
#nav {
    background-color: #AAC4E7 !important;
    height: 80px;
    font-family: Bungee Inline;
    
}
#col {
    color: black;
}
.nav-link {
    font-family: Playfair Display;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}
nav {
    padding: 30px;
    background-color: #AAC4E7;
    text-align: center;
    border-bottom: #EB631B solid 5px !important;
    border-top: #EB631B solid 5px !important;
}
.navbar-nav {
    margin-left: 21rem;
}
nav a {
    font-weight: bolder !important;
    font-size: 1.2rem !important;
    color: black !important;
    margin: 1.5rem;
    margin-right: 3rem;
    text-decoration: none;
}
nav a.router-link-exact-active {
    color: black;
    border-bottom: 2px solid black;
}
.nav-link:hover {
    color: black;
    border-bottom: 2px solid black;
}
.admin-icon { 
    margin-left: 8rem;
}


img[alt='logo'] {
    margin-top: 4%;
    border: 3px solid black !important;
}
/* Style the hamburger menu button */
.navbar-toggler {
    border: none; /* Remove border */
    background-color: transparent; /* Transparent background */
}
.navbar-toggler-icon {
    background-image: none; /* Remove default icon */
}
/* Add custom white icon for the hamburger button */
.navbar-toggler::before {
    content: "\2630"; /* Unicode for hamburger icon */
    font-size: 1.5rem;
    color: white; /* White color for the icon */
}
/* Style the links within the collapsed menu */
.navbar-collapse {
    background-color: #AAC4E7; /* Match the background color */
}
.navbar-nav .nav-link {
    color: #570000; /* White color for the links */
}
/* Optional: Ensure the active and hover states also have white text */
.navbar-nav .nav-link.active {
    color: #B21616; /* Active link color */
}
.navbar-nav .nav-link:hover {
    color: #FF5733; /* Hover color */
}
/* Ensure the links are white when in the collapsed state */
.navbar-collapse.show .navbar-nav .nav-link {
    color: #570000; /* Ensure links are white when menu is open */
}
@media (max-width: 300px) {
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -65rem !important;
    }
    .admin-icon {
        margin-left: 0;
    }
}
@media (max-width: 720px) {
    .navbar-nav {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
    nav a {
        text-align: center;
        margin-left: -65rem !important;
    }
    .admin-icon {
        margin-left: 0;
    }
}

</style>