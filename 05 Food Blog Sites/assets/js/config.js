// Create Random Numbers

function randomNumber(num) {
  return Math.trunc(Math.random() * num) + 1;
}

function generateHTML1(h) {
  return `
      <div class="card">
          <figure class="item_img">
            <img src="./assets/img/${h}.png" alt="${h}" />
          </figure>
          <h3 class="item_title">${h}</h3>
          <p class="item_txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              suscipit.
          </p>
      </div>
    `;
}

function generateHTML2([h, v]) {
  initialVal += 1;
  return `
    <figure class="insta_img h${h} v${v}">
      <img src="https://picsum.photos/500/300?random=${initialVal}" alt="Image-0${initialVal}" />
      <div class="overlay">
        <p class="view"> View </p>
      </div>
    </figure>    
    `;
}
