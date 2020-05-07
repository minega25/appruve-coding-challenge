import plans from "./api-mock.js";

(function IIFE() {
  let pricingCardWrapper = document.getElementsByClassName("pricing-cards")[0];
  for (let plan in plans) {
    let description = "";
    for (let item of plans[plan].description) {
      description += `<li>✔ ${item}</li>`;
    }

    pricingCardWrapper.innerHTML += `<article class="pricing-card">
        <h2>${plans[plan].name}</h2>
        <p class="price-tag">$<b>${plans[plan].price}</b>/mon</p>
        <hr />
        <span class="plan-details">
          <ul>
          ${description}
          </ul>
        </span>
        <span class="btn-wrapper"><a href="#" class="btn">Buy now</a></span>
      </article>`;
  }
})();
