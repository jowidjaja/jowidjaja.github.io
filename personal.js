const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

//GALLERY FOR ARRAY (LAZY LOADING?)
const gallery = [
    {
        image: "images/260723_macbook.JPG",
        caption: "Wow. I guess people can really change.",
        date: "2026-07-23",
        location: "Elm Hall",
        tags: ["growth"],
        hidden: false,
    }, 
    {
        image: "images/260722_sammy.JPG",
        caption: "",
        date: "2026-07-22",
        location: "Elm Hall",
        tags: ["growth"],
        hidden: false,
    }, 
    {
        image: "images/260722_keyboard.JPG",
        caption: "One year + a couple hundred dollars later... We are back baby.",
        date: "2026-07-22",
        location: "Elm Hall",
        tags: ["ventures"],
        hidden: false,
    }, 
    {
        image: "images/260720_isha.JPG",
        caption: "",
        date: "2026-07-20",
        location: "Dalton, GA",
        tags: ["friends"],
        hidden: false,
    }, 
    {
        image: "images/260605_Ally.JPG",
        caption: "Ally got me through Jr clinic",
        date: "2026-06-05",
        location: "Dental College of Georgia",
        tags: ["friends"],
        hidden: false,
    }, 
    {
        image: "images/260523_candle.JPG",
        caption: "",
        date: "2026-05-23",
        location: "Elm Hall",
        tags: ["favorites"],
        hidden: false,
    }, 
    {
        image: "images/260522_keyboards.jpg",
        caption: "Lesson learned",
        date: "2026-05-22",
        location: "Elm Hall",
        tags: ["lessons"],
        hidden: false,
    }, 
    {
        image: "images/260522_music.jpg",
        caption: "",
        date: "2026-05-22",
        location: "Elm Hall",
        tags: ["personal"],
        hidden: false,
    }, 
    {
        image: "images/260519_rack.JPG",
        caption: "",
        date: "2026-05-19",
        location: "Rack",
        tags: ["ventures"],
        hidden: false,
    }, 
    {
        image: "images/260516_leuchtturm.JPG",
        caption: "The BEST notebook. Tried and tested.",
        date: "2026-05-16",
        location: "Elm Hall",
        tags: ["favorites"],
        hidden: false,
    }, 
    {
        image: "images/260515_mariakayak.JPG",
        caption: "",
        date: "2026-05-15",
        location: "Kayaking with Maria",
        tags: ["friends"],
        hidden: false,
    },
    {
        image: "images/260515_donkey.JPG",
        caption: " Stallings Island",
        date: "2026-05-15",
        location: "Stallings Island",
        tags: ["nature","bucket-listing"],
        hidden: false,
    },
   
    {
        image: "images/260514_sandwich.JPG",
        caption: "",
        date: "2026-05-14",
        location: "Turkey sandwich for lunch",
        tags: ["food"],
        hidden: false,
    },
    {
        image: "images/260511_middlemarch.JPG",
        caption: "",
        date: "2026-05-11",
        location: "Middlemarch by George Elliot",
        tags: ["academia"],
        hidden: false,
    },
    {
        image: "images/260508_karen.jpg",
        caption: "This physics nerd is elite",
        date: "2026-05-08",
        location: "Hauger's Retirement Party",
        tags: ["friends"],
        hidden: false,

    },
    {
        image: "images/260506_drs.jpg",
        caption: "Last Dental Research Society meeting as president",
        date: "2026-05-06",
        location: "Ed Commons - MCG",
        tags: ["academia"],
        hidden: false,

    },
    {
        image: "images/260502_mysterybook.jpg",
        caption: "",
        date: "2026-05-02",
        location: "Mystery Book Era",
        tags: ["random"],
        hidden: false,

    },
    {
        image: "images/260502_muntean.JPG",
        caption: "The drawings!",
        date: "2026-05-02",
        location: "Elm Hall",
        tags: ["academia"],
        hidden: false,
    },
    {
        image: "images/260419_food.JPG",
        caption: "",
        date: "2026-04-19",
        location: "Elm Hall",
        tags: ["food"],
        hidden: false,
    },
    {
        image: "images/260407_lions.JPG",
        caption: "",
        date: "2026-04-07",
        location: "Atlanta Zoo",
        tags: ["nature"],
        hidden: false,
    },
    {
        image: "images/260407_grayhavens.jpg",
        caption: "The Gray Havens",
        date: "2026-04-07",
        location: "Gray Havens",
        tags: ["events"],
        hidden: false,
    },
    {
        image: "images/260223_mathnerds.JPG",
        caption: "Thank God for math nerds, 10/10",
        date: "2026-02-23",
        location: "Savannah River Brewery",
        tags: ["friends"],
        hidden: false,
    },
    {
        image: "images/260118_aldigang.JPG",
        caption: "Aldi Gang",
        date: "2026-01-18",
        location: "Aldi",
        tags: ["friends"],
        hidden: false,
    },
    {
        image: "images/251027_museum.jpg",
        caption: "",
        date: "2025-12-27",
        location: "Milken Center for Advancing the American Dream",
        tags: ["places"],
        hidden: false,
    },
    {
        image: "images/250405_eye.jpg",
        caption: "Anna's EYE!",
        date: "2025-04-05",
        location: "Memphis School of Optometry",
        tags: ["bucket-listing"],
        hidden: false,
    },
    
]

//GALLERY
const galleryContainer = document.querySelector(".gallery_container");

if (galleryContainer) {
  const grouped = {};
  gallery.forEach(item => {
    if (item.hidden) return;

    const year = new Date(item.date).getFullYear();

    if (!grouped[year]) {
      grouped[year] = [];
    }

    grouped[year].push(item);
  });
  Object.keys(grouped)
    .sort((a, b) => b - a)
    .forEach(year => {
      const section = document.createElement("div");
      section.classList.add("year_section");
      const marker = document.createElement("div");
      marker.classList.add("year_marker");
      marker.innerHTML = `
        <div class="year_line"></div>
        <span>${year}</span>
        <div class="year_line"></div>
      `;
      const grid = document.createElement("div");
      grid.classList.add("gallery");
      grouped[year].forEach(item => {
        const card = document.createElement("div");
        card.classList.add("gallery_item");
        card.innerHTML = `
        <div class="image_wrapper">
          <img 
            src="${item.image}" 
            alt=""
            loading="lazy"
            decoding="async"
            class="gallery_img"
          />
          <div class="image_overlay">
            <p class="overlay_caption">
              ${[item.date, item.caption].filter(Boolean).join(" | ")}
            </p>
          </div>
        </div>
      `;
          card.addEventListener("click", () => {
          modal.classList.add("show");
          modalImg.src = item.image;
          modalCaption.textContent = [item.date, item.caption].filter(Boolean).join(" | ");
          });
        grid.appendChild(card);
        const img = card.querySelector(".gallery_img");
        img.addEventListener("load", () => {
        img.classList.add("loaded");
        });
      });
      section.appendChild(marker);
      section.appendChild(grid);
      galleryContainer.appendChild(section);
    });

  //GALLERY CLICKED DISPLAY
  closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
      if(e.target === modal){
        modal.classList.remove("show");
      }
  });
}


//TOGGLE BUTTON
const themeToggle = document.getElementById("themeToggle");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const darkModeEnabled =
      document.body.classList.contains("dark-mode");
    localStorage.setItem(
      "theme",
      darkModeEnabled ? "dark" : "light"
    );
});
