let $ = document
const bars = $.getElementById('bars')
const navMenuMobile = $.getElementById('navMenu')
const menuItemMob = $.querySelectorAll('.menu-item__mobile')
const overlay = $.getElementById('overlay')
const menuItem = $.querySelectorAll('.menu-item')


function openNavMenu(){
   navMenuMobile.classList.add('left-0')
   overlay.classList.add('fixed')
}

overlay.addEventListener('click',function(){
   navMenuMobile.classList.add('-left-56')
   navMenuMobile.classList.remove('left-0')
   overlay.classList.remove('fixed')
})

menuItemMob.forEach(function(item){
  item.addEventListener('click',function(){
   let activeItem = $.querySelector('li.activeMobile')
    activeItem.classList.remove('activeMobile')
    item.classList.add('activeMobile')
  })
})

menuItem.forEach(function(item){
  item.addEventListener('click',function(){
    let activeItem = $.querySelector('li.menu-item.active')
    activeItem.classList.remove('active')
    item.classList.add('active')
  })
})

bars.addEventListener('click',openNavMenu)