//array for gallery
const gallery = [
    {
        image: "images/testpic.png",
        caption: "this is an example",
        date: "",
        location: "",
        tags: [],
        hidden: false,
    },
    {
        image: "images/grayhavens.jpg",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,

    },
    {
        image: "images/testpic.png",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,

    },
    {
        image: "images/testpic.png",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,
    },
    {
        image: "images/testpic.png",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,
    },
    {
        image: "images/testpic.png",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,
    },
    {
        image: "images/testpic.png",
        caption: "",
        date: "",
        location: "",
        tags: [],
        hidden: false,
    },
    
]

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
