// PARTNERS EGYPT

let partnersHTML = ``;

egpartners.forEach((partner) => {
    //Accumulator Pattern - Combin all HTML code into this variable partnersHTML
    partnersHTML += `
      <div class="card">
        <a href=${partner.website} target="_blank">
          <img src=${partner.logo} alt=${partner.name}>
        </a>
      </div>
    `
  });
  document.querySelector('.js-partner-grid').innerHTML = partnersHTML;