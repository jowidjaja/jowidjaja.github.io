const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".close");

//array for gallery, lazy loading, defer script
const gallery = [

    {
        image: "images/260508_karen.jpg",
        caption: "This physics nerd is elite",
        date: "2026-05-08",
        location: "Hauger's Retirement Party",
        tags: [],
        hidden: false,

    },
    {
        image: "images/260506_drs.jpg",
        caption: "Last Dental Research Society meeting as president",
        date: "2026-05-06",
        location: "Ed Commons - MCG",
        tags: [],
        hidden: false,

    },
    {
        image: "images/260502_mysterybook.jpg",
        caption: "",
        date: "2026-05-02",
        location: "Mystery Book Era",
        tags: [],
        hidden: false,

    },
    {
        image: "images/260502_muntean.JPG",
        caption: "The drawings!",
        date: "2026-05-02",
        location: "Elm Hall",
        tags: [],
        hidden: false,
    },
    {
        image: "images/260419_food.JPG",
        caption: "",
        date: "2026-04-19",
        location: "Elm Hall",
        tags: [],
        hidden: false,
    },
    {
        image: "images/260407_lions.JPG",
        caption: "",
        date: "2026-04-07",
        location: "Atlanta Zoo",
        tags: [],
        hidden: false,
    },
    {
        image: "images/260407_grayhavens.jpg",
        caption: "The Gray Havens",
        date: "2026-04-07",
        location: "Gray Havens",
        tags: [],
        hidden: false,
    },
    {
        image: "images/260223_mathnerds.JPG",
        caption: "Math nerds, 10/10",
        date: "2026-02-23",
        location: "Savannah River Brewery",
        tags: [],
        hidden: false,
    },
    {
        image: "images/251027_museum.jpg",
        caption: "",
        date: "2025-10-27",
        location: "Milken Center for Advancing the American Dream",
        tags: [],
        hidden: false,
    },
    
]




//for year 
const galleryContainer = document.querySelector(".gallery_container");

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
        <img src="${item.image}" alt="">

        <div class="image_overlay">
          <p class="overlay_caption">
            ${item.caption || ""}
          </p>
        </div>
      </div>
    `;
        card.addEventListener("click", () => {
        modal.classList.add("show");
        modalImg.src = item.image;
        modalCaption.textContent = item.caption || "";
        });
      grid.appendChild(card);
    });

    section.appendChild(marker);
    section.appendChild(grid);
    galleryContainer.appendChild(section);
  });








closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
       modal.classList.remove("show");
    }
});
