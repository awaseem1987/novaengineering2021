let partnersHTML = ``;
let divisionsHTML = ``;

// PARTNERS

partners.forEach((partner) => {
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

// DIVISIONS

divisions.forEach((division) => {
  divisionsHTML += `
      <div class="card">
          ${division.symbol}
          <h5>${division.name}</h5>
      </div>
  `
});
document.querySelector('.js-division-grid').innerHTML = divisionsHTML;

