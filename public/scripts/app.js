let $ = document;
const bars = $.getElementById("bars");
const navMenuMobile = $.getElementById("navMenu");
const menuItemMob = $.querySelectorAll(".menu-item__mobile");
const overlay = $.getElementById("overlay");
const menuItem = $.querySelectorAll(".menu-item");
const tecnologiesBox = $.getElementById("tecnologies-box");
const kelasContainer = $.getElementById('kelas-container')
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

let kelasArray = [
  {id:1 , img:'/public/images/Kelas/web_design_1.png' , title:'Complete Freelancer UI/UX & Illustration Design' , graphist:'Adriana Silva', rp:'567,000'},
  {id:2 , img:'/public/images/Kelas/web_design_2.png' , title:'Complete Full-Stack Laravel React JS' , graphist:'Sami Leon', rp:'690,000'},
  {id:3 , img:'/public/images/Kelas/web_design_3.png' , title:'Complete Full-Stac k Laravel Flutter' , graphist:'Mateu Fernandez', rp:'413,000'},
  {id:4 , img:'/public/images/Kelas/web_design_4.png' , title:'complete freelancer uI/UX & illustration design' , graphist:'Kevin Rogers', rp:'753,150'},
  {id:5 , img:'/public/images/Kelas/web_design_5.png' , title:'Complete Full-Stack Laravel React JS' , graphist:'Oscar Grace', rp:'653,233'},
  {id:6 , img:'/public/images/Kelas/web_design_6.png' , title:'Complete Full-Stack Laravel Flutter' , graphist:'Theo Amari', rp:'443,113'},
];

arrayTec.map(function (lang) {
  let tecElem = $.createElement("div");
  tecElem.classList.add("tehcnology-item");
  tecElem.insertAdjacentHTML(
    "beforeend",
    `<img src="` +
      lang.img +
      `" class="w-[55px] h-[55px]" alt="` +
      lang.name +
      `">
   <div class="flex flex-col gap-y-2">
     <h5 class="font-PoppinsBold">` +
      lang.name +
      `</h5>
      <p class="text-xs">` +
      lang.section +
      `</p>
   </div>`
  );
  tecFragment.append(tecElem);
});

kelasArray.map(function(box){
  kelasContainer.insertAdjacentHTML('beforeend',` <div class="kelas-box max-w-[400px] h-[535px]">
  <div
    class=" h-[315px] bg-[#D9D9D9] relative rounded-md px-9 py-9"
  >
    <img src="`+box.img+`" alt="" />
    <div class="kelas-describe">
      <p class="text-black font-PoppinsBold text-2xl line-clamp-2">
        `+box.title+`
      </p>
      <img
        class="w-9 h-9 absolute hidden sm:block right-4 -bottom-3"
        src="/public/images/Join/JavaScript.png"
        alt=""
      />
    </div>
  </div>
  <div class="bg-[#120F0E] w-full py-5 px-6 rounded-md">
    <div class="kelas-score">
      <span class="font-PoppinsRegular text-[#AFAEC3]"
        >by `+box.graphist+`
      </span>
      <div class="flex gap-x-2">
        <svg class="w-6 h-6 text-[#FFB340]">
          <use href="#star"></use>
        </svg>
        <div>
          <span>4.5</span>
          <span class="text-[14px] text-[#AFAEC3]">(penilaian)</span>
        </div>
      </div>
    </div>
    <h5 class="my-4 text-[#D9D9D9] font-PoppinsBold text-2xl line-clamp-2">
      `+box.title+`
    </h5>
    <span class="text-xl">rp. `+box.rp+`</span>
  </div>
</div>`)
})

tecnologiesBox.appendChild(tecFragment);

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
