let $ = document;
const bars = $.getElementById("bars");
const navMenuMobile = $.getElementById("navMenu");
const menuItemMob = $.querySelectorAll(".menu-item__mobile");
const overlay = $.getElementById("overlay");
const menuItem = $.querySelectorAll(".menu-item");
const tecnologiesBox = $.getElementById("tecnologies-box");
let tecFragment = $.createDocumentFragment();

let arrayTec = [
  {
    id: 1,
    name: "Laravel",
    section: "Back End",
    img: "/public/images/Tecnologies/larawel.png",
  },
  {
    id: 2,
    name: "Php Native",
    section: "Back End",
    img: "/public/images/Tecnologies/php-native.png",
  },
  {
    id: 3,
    name: "Javascript",
    section: "Back End",
    img: "/public/images/Tecnologies/Javascript.png",
  },
  {
    id: 4,
    name: "React Js",
    section: "Front End",
    img: "/public/images/Tecnologies/react.png",
  },
  {
    id: 5,
    name: "Tailwind",
    section: "Front End",
    img: "/public/images/Tecnologies/tailwind.png",
  },
  {
    id: 6,
    name: "Figma",
    section: "Ui Ux Design",
    img: "/public/images/Tecnologies/figma.png",
  },
  {
    id: 7,
    name: "Vue js",
    section: "Front End",
    img: "/public/images/Tecnologies/vue-js.png",
  },
  {
    id: 8,
    name: "blender",
    section: "3D design",
    img: "/public/images/Tecnologies/blender.png",
  },
  {
    id: 9,
    name: "Kotlin",
    section: "Android",
    img: "/public/images/Tecnologies/kotlin.png",
  },
  {
    id: 10,
    name: "Phyton",
    section: "data science",
    img: "/public/images/Tecnologies/python.png",
  },
  {
    id: 11,
    name: "golang",
    section: "Back End",
    img: "/public/images/Tecnologies/golang.png",
  },
  {
    id: 12,
    name: "flutter",
    section: "android",
    img: "/public/images/Tecnologies/flutter.png",
  },
];

arrayTec.map(function (lang) {
  let tecElem = $.createElement("div");
  tecElem.classList.add("tehcnology-item");
  tecElem.insertAdjacentHTML(
    "beforeend",
    `<img src="`+lang.img+`" class="w-[55px] h-[55px]" alt="`+lang.name+`">
   <div class="flex flex-col gap-y-2">
     <h5 class="font-PoppinsBold">`+lang.name+`</h5>
      <p class="text-xs">`+lang.section+`</p>
   </div>`
  );
  tecFragment.append(tecElem)
});

tecnologiesBox.appendChild(tecFragment)

function openNavMenu() {
  navMenuMobile.classList.add("left-0");
  overlay.classList.add("fixed");
}

overlay.addEventListener("click", function () {
  navMenuMobile.classList.add("-left-56");
  navMenuMobile.classList.remove("left-0");
  overlay.classList.remove("fixed");
});

menuItemMob.forEach(function (item) {
  item.addEventListener("click", function () {
    let activeItem = $.querySelector("li.activeMobile");
    activeItem.classList.remove("activeMobile");
    item.classList.add("activeMobile");
  });
});

menuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    let activeItem = $.querySelector("li.menu-item.active");
    activeItem.classList.remove("active");
    item.classList.add("active");
  });
});

bars.addEventListener("click", openNavMenu);
