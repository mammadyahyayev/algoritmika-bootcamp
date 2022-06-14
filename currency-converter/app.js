const sourceBtns = document.querySelectorAll("#first-block .currency");
const sourceInput = document.querySelector("#first-block input");
const currentSourceCurrency = document.querySelector(
  "#first-block .current-currency"
);

const destionationBtns = document.querySelectorAll("#second-block .currency");
const destionationInput = document.querySelector("#second-block input");
const currentDestionationCurrency = document.querySelector(
  "#second-block .current-currency"
);

let sourceCurrency = "RUB";
let destinationCurrency = "USD";

const PURPLE_COLOR = "#8128f5";
const WHITE_COLOR = "#ffffff";

sourceBtns[0].style.backgroundColor = PURPLE_COLOR;
destionationBtns[1].style.backgroundColor = WHITE_COLOR;

fetch(`https://api.exchangerate.host/latest?base=${sourceCurrency}`)
  .then((res) => res.json())
  .then((data) => {
    calculateCurrentConversionResult(data.rates);
  });

function calculateCurrentConversionResult(rates) {
  for (const rate in rates) {
    if (rate == destinationCurrency) {
      currentSourceCurrency.innerText = `1 ${sourceCurrency} = ${rates[rate]} ${destinationCurrency}`;
      currentDestionationCurrency.innerText = `1 ${destinationCurrency} = ${
        1 / rates[rate]
      } ${sourceCurrency}`;
    }
  }
}

sourceBtns.forEach((sourceBtn) => {
  sourceBtn.addEventListener("click", (e, index) => {
    paintUnselectedCurrency(e.target.parentElement);
    e.target.style.backgroundColor = PURPLE_COLOR;
    sourceCurrency = e.target.id;

    calculateConversionResult();
  });
});

function paintUnselectedCurrency(parentElement) {
  let children = parentElement.children;
  for (const c of children) {
    c.style.backgroundColor = WHITE_COLOR;
  }
}

destionationBtns.forEach((destionationBtn) => {
  destionationBtn.addEventListener("click", (e) => {
    paintUnselectedCurrency(e.target.parentElement);
    e.target.style.backgroundColor = PURPLE_COLOR;

    destinationCurrency = e.target.id;
    calculateConversionResult(sourceCurrency);
  });
});

sourceInput.addEventListener("keyup", () => {
  calculateConversionResult(sourceCurrency);
});

function calculateConversionResult(currency) {
  fetch(`https://api.exchangerate.host/latest?base=${currency}`)
    .then((res) => res.json())
    .then((data) => {
      let rates = data.rates;

      for (const rate in rates) {
        if (rate == destinationCurrency) {
          destionationInput.value = Number(sourceInput.value) * rates[rate];
          calculateCurrentConversionResult(rates);
        }
      }
    });
}
