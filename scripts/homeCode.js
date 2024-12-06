let divisionsHTML = ``;

// DIVISIONS

divisions.forEach((division) => {
  //Accumulator Pattern - Combin all HTML code into this variable partnersHTML
  divisionsHTML += `
      <div class="card">
          ${division.symbol}
          <h5>${division.name}</h5>
      </div>
  `
});
document.querySelector('.js-division-grid').innerHTML = divisionsHTML;

