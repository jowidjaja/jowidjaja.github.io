//array for gallery
const gallery = [

    {
        image: "images/260508_karen.jpg",
        caption: "",
        date: "2026-05-08",
        location: "Hauger's Retirement Party",
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
        image: "images/260407_lions.jpg",
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
        image: "images/251027_museum.jpg",
        caption: "",
        date: "2025-10-27",
        location: "Milken Center for Advancing the American Dream",
        tags: [],
        hidden: false,
    },
    
]

/*
const galleryContainer = document.querySelector(".gallery");

gallery.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("gallery_item");

  card.innerHTML = `
    <img src="${item.image}" alt="">
    ${item.caption ? `<p>${item.caption}</p>` : ""}
  `;

  galleryContainer.appendChild(card);
});
*/


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
        <img src="${item.image}" alt="">
        <p>${item.caption}</p>
      `;
        card.addEventListener("click", () => {
        modal.classList.add("show");
        modalImg.src = item.image;
        });
      grid.appendChild(card);
    });

    section.appendChild(marker);
    section.appendChild(grid);
    galleryContainer.appendChild(section);
  });






const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
       modal.classList.remove("show");
    }
});
