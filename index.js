let movies = [
    {
      name: "Doctor Strange in The Multiverse of Madness",
      des:
        "When the Metaverse is Unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary",
      image: "banners/doc-st.jpeg"
    },
    {
      name: "Anupama",
      des:
        "Despite the many challenges thrown her away, Anupama begins a new chapter of her life post-divorse. Head held always high, whats waiting for her next?",
      image: "banners/anupama.jpeg"
    },
    {
      name: "2AM",
      des:
        "New to the city , a medical settles in a hostel. Her life turns upside down when she experiences mysterious happenings, unfolding a horrifying past",
      image: "banners/realstory.jpeg"
    },
    {
      name: "Ye Rishta Rya Kehlata Hai",
      des:
        "LATEST EPISODE WILL BE FREE AFTER 3 DAYS. kartik, Naira and Sirat's daughter are grown up. Akshara immensely loves arohi .But, what happen when they are caught in a love triangle with Abhimanyu",
      image: "banners/ye-rishta.jpeg"
    },
    {
      name: "Laali",
      des:
        "A lonely laundryman from suburbs of Kolkata finds companionship in an unclaimed red dress, wjich triggers esoteric memories from the past",
      image: "banners/laali.jpeg"
    }
  ];
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  //Video Cards
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });