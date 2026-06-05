const thoughtsContainer = document.querySelector(".thoughts_container");
const thoughtModal = document.getElementById("thoughtModal");
const thoughtBody = document.getElementById("thoughtBody");
const thoughtBtn = document.querySelector(".close");

fetch("thoughts.json")
  .then(response => response.json())
  .then(thoughts => {

    console.log("thoughts loaded");
    console.log(thoughts);

    thoughts.forEach(thought => {

      console.log("building card");

      const card = document.createElement("div");
      card.classList.add("thought_card");

      card.innerHTML = `
        <img src="${thought.thumbnail}" class="thought_thumb">

        <div class="thought_info">
          <h2>${thought.title}</h2>

          <p class="thought_meta">
            ${thought.category} | ${new Date(thought.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
                })}
          </p>

          <p>${thought.preview}</p>
        </div>
      `;

      card.addEventListener("click", () => {

        thoughtBody.innerHTML = `
          <div class="thought_modal">

            <div class="thought_header">

              <img
                src="${thought.thumbnail}"
                class="thought_article_thumb"
              >

              <div class="thought_header_text">
                <h1>${thought.title}</h1>

                <p class="thought_meta">
                  ${thought.category} | ${new Date(thought.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                    })}
                </p>
              </div>

            </div>

            <div class="thought_content">
              ${thought.content}
            </div>

            <div class="thought_tags">
              ${thought.tags.map(tag => "#" + tag).join(" ")}
            </div>

          </div>
        `;

        thoughtModal.classList.add("show");

      });

      thoughtsContainer.appendChild(card);

    });

  });

thoughtBtn.addEventListener("click", () => {
  thoughtModal.classList.remove("show");
});

thoughtModal.addEventListener("click", e => {
  if (e.target === modal) {
    thoughtModal.classList.remove("show");
  }
});




