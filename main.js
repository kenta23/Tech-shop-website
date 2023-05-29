 /*Functions for menu button in mobile phones */
 
 const barMenu = document.getElementsByClassName("menu-bar")[0]; //targetting the menu hamburger bar
 const navbarMenu = document.getElementsByClassName("container-nav")[0] //tragetting the ul element contains the links

 barMenu.addEventListener("click", () => {  //add eventlistener / when we click, then do this
    navbarMenu.classList.toggle('active')
 })