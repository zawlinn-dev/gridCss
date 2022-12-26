const getImgGp = document.querySelectorAll(".insta_img"),
  mContainer = document.querySelector(".modal_container"),
  mView = document.querySelector("#mView"),
  sContainer = document.querySelector(".slider_container"),
  mItem = document.querySelector(".modal_items"),
  prevIcon = document.querySelector(".prev"),
  nextIcon = document.querySelector(".next");

let imgIndex = 0,
  scrollIndex = 0,
  num = 0;

modalInit();

function modalInit() {
  getImgGp.forEach((val) => {
    // return click element
    val.addEventListener("click", function (e) {
      const getImg = this.querySelector("img");

      if (getImg.src) {
        getIndex(getImg);

        mContainer.classList.add("show");

        // To View Modal Image
        modalView(getImg);

        // To show Modal Caption and Count
        modalCaption(imgIndex + 1);

        // To create Slider for Modal Slider
        if (!sContainer.childElementCount) slideImages(imgIndex);

        // To Show active Image
        activeSlide(imgIndex);
      }
    });
  });
}

// Add Event Listener of whole Docs

document.addEventListener("click", function (e) {
  console.log(Boolean(e.target.src));
  e.preventDefault();
  // Close Modal Box
  if (
    e.target.classList.contains("modal_container") ||
    e.target.classList.contains("close_btn")
  ) {
    mContainer.classList.remove("show");
  }

  //
  const getSliderImg = document.querySelectorAll(".slider_img");

  if (e.target.classList.contains("slideRight")) {
    num >= 22 ? (num = 0) : num++;

    sContainer.scrollWidth > scrollIndex + 526
      ? (scrollIndex += getSliderImg[0].offsetWidth)
      : (scrollIndex = 0);

    activeScroll(scrollIndex + num);
  } else if (e.target.classList.contains("slideLeft")) {
    num <= 0 ? (num = 22) : num--;

    scrollIndex > 0
      ? (scrollIndex -= getSliderImg[0].offsetWidth)
      : (scrollIndex = sContainer.scrollWidth - 500 + num + 4);

    activeScroll(scrollIndex);
  }

  if (e.target.classList.contains("next")) {
    imgIndex >= 26 ? (imgIndex = 0) : imgIndex++;
    const a = getSliderImg[imgIndex].querySelector("img");
    modalView(a);
    activeSlide(imgIndex);
    // activeScroll(a.offsetLeft);

    modalCaption(imgIndex + 1);
  } else if (e.target.classList.contains("prev")) {
    imgIndex < 1 ? (imgIndex = 26) : imgIndex--;
    const a = getSliderImg[imgIndex].querySelector("img");

    modalView(a);

    modalCaption(imgIndex + 1);
    activeSlide(imgIndex);
  }

  //

  if (e.target.src) {
    modalView(e.target);

    getIndex(e.target);

    modalCaption(imgIndex + 1);

    activeSlide(imgIndex);
  }
});

// Show Modal Function

function modalView(e) {
  mView.src = e.src;
  mView.alt = e.alt;
}

// fuction Caption

function modalCaption(e) {
  const counter = document.querySelector(".counter"),
    mCaption = document.querySelector(".caption");

  counter.textContent = `${e}/${getImgGp.length}`;

  const num = e <= 9 ? `0${e}` : e;

  mCaption.textContent = `Image - ${num} `;
}

function slideImages(e) {
  const mainAry = Array.from(getImgGp);

  let ImgArys = [];

  mainAry.forEach((val) => {
    const getImg = val.querySelector("img");

    ImgArys.push([getImg.src, getImg.alt]);
  });

  const sliderImg = ImgArys.map(generateHTML3).join("");

  sContainer.insertAdjacentHTML("beforeend", sliderImg);
}

function activeSlide(e) {
  const slide = document.querySelectorAll(".slider_img");

  slide.forEach((val) => val.classList.remove("active"));

  num = e;

  slide[e].classList.add("active");

  const cPos = slide[e].offsetLeft;

  scrollIndex = cPos;

  activeScroll(scrollIndex);
}

//
function activeScroll(e) {
  mItem.scrollTo({
    left: e,
    behavior: "smooth",
  });
}

function getIndex(e) {
  getAlt = e.alt;

  let gCounter = e.alt.slice(-2);

  gCounter = Number(gCounter) <= 9 ? e.alt.slice(-1) : e.alt.slice(-2);

  imgIndex = gCounter - 1;
}

function generateHTML3([h, v]) {
  return `
    <figure class="slider_img">
      <img src="${h}" alt="${v}" />
    </figure>    
    `;
}
