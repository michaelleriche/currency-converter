countryCodes = [
  {
    code: "CAD",
    name: "Canada",
    character: "$",
  },
  {
    code: "USD",
    name: "USA",
    character: "$",
  },
  {
    code: "USD",
    name: "United States",
    character: "$",
  },
  {
    code: "USD",
    name: "United States of America",
    character: "$",
  },
  {
    code: "USD",
    name: "America",
    character: "$",
  },
  {
    code: "JPY",
    name: "Japan",
    character: "¥",
  },
  {
    code: "BGN",
    name: "Bulgaria",
    character: "лв",
  },
  {
    code: "CZK",
    name: "Czech Republic",
    character: "Kč",
  },
  {
    code: "CZK",
    name: "Czechia",
    character: "Kč",
  },
  {
    code: "DKK",
    name: "Denmark",
    character: "Kr.",
  },
  {
    code: "GBP",
    name: "Great Britain",
    character: "£",
  },
  {
    code: "GBP",
    name: "United Kingdom",
    character: "£",
  },
  {
    code: "GBP",
    name: "Scotland",
    character: "£",
  },
  {
    code: "GBP",
    name: "Northern Ireland",
    character: "£",
  },
  {
    code: "GBP",
    name: "Wales",
    character: "£",
  },
  {
    code: "HUF",
    name: "Hungary",
    character: "Ft",
  },
  {
    code: "PLN",
    name: "Poland",
    character: "zł",
  },
  {
    code: "RON",
    name: "Romania",
    character: "lei",
  },
  {
    code: "SEK",
    name: "Sweden",
    character: "kr",
  },
  {
    code: "CHF",
    name: "Switzerland",
    character: "CHF",
  },
  {
    code: "ISK",
    name: "Iceland",
    character: "kr",
  },
  {
    code: "NOK",
    name: "Norway",
    character: "kr",
  },
  {
    code: "HRK",
    name: "Croatia",
    character: "kn",
  },
  {
    code: "RUB",
    name: "Russia",
    character: "₽",
  },
  {
    code: "TRY",
    name: "Turkey",
    character: "₺",
  },
  {
    code: "AUD",
    name: "Australia",
    character: "$",
  },
  {
    code: "BRL",
    name: "Brazil",
    character: "R$",
  },
  {
    code: "EUR",
    name: "France",
    character: "€",
  },
  {
    code: "CNY",
    name: "China",
    character: "¥",
  },
  {
    code: "HKD",
    name: "Hong Kong",
    character: "$",
  },
  {
    code: "IDR",
    name: "Indonesia",
    character: "Rp",
  },
  {
    code: "ILS",
    name: "Israel",
    character: "₪",
  },
  {
    code: "INR",
    name: "India",
    character: "₹",
  },
  {
    code: "KRW",
    name: "South Korea",
    character: "₩",
  },
  {
    code: "MXN",
    name: "Mexico",
    character: "$",
  },
  {
    code: "MYR",
    name: "Malaysia",
    character: "RM",
  },
  {
    code: "NZD",
    name: "New Zealand",
    character: "$",
  },
  {
    code: "PHP",
    name: "Philippines",
    character: "₱",
  },
  {
    code: "SGD",
    name: "Singapore",
    character: "$",
  },
  {
    code: "THB",
    name: "Thailand",
    character: "฿",
  },
  {
    code: "ZAR",
    name: "South Africa",
    character: "R",
  },
  {
    code: "EUR",
    name: "Austria",
    character: "€",
  },
  {
    code: "EUR",
    name: "Belgium",
    character: "€",
  },
  {
    code: "EUR",
    name: "Cyprus",
    character: "€",
  },
  {
    code: "EUR",
    name: "Estonia",
    character: "€",
  },
  {
    code: "EUR",
    name: "Finland",
    character: "€",
  },
  {
    code: "EUR",
    name: "Spain",
    character: "€",
  },
  {
    code: "EUR",
    name: "Germany",
    character: "€",
  },
  {
    code: "EUR",
    name: "Greece",
    character: "€",
  },
  {
    code: "EUR",
    name: "Ireland",
    character: "€",
  },
  {
    code: "EUR",
    name: "Italy",
    character: "€",
  },
  {
    code: "EUR",
    name: "Latvia",
    character: "€",
  },
  {
    code: "EUR",
    name: "Lithuania",
    character: "€",
  },
  {
    code: "EUR",
    name: "Luxembourg",
    character: "€",
  },
  {
    code: "EUR",
    name: "Malta",
    character: "€",
  },
  {
    code: "EUR",
    name: "Netherlands",
    character: "€",
  },
  {
    code: "EUR",
    name: "The Netherlands",
    character: "€",
  },
  {
    code: "EUR",
    name: "Portugal",
    character: "€",
  },
  {
    code: "EUR",
    name: "Slovakia",
    character: "€",
  },
  {
    code: "EUR",
    name: "Slovenia",
    character: "€",
  },
];

// find location based on IP
let geoLocation;
let result;
let localeCode;
let dropdown;
let select;
let formSubmit = document.getElementById("form");

(function geoFindMe() {
  fetch("https://extreme-ip-lookup.com/json/")
    .then((res) => res.json())
    .then((response) => {
      geoLocation = response.country;
      document.querySelector(".countryCode").innerHTML = geoLocation;
      result = countryCodes.filter(function (country) {
        return country.name == geoLocation;
      });
      localeCode = result[0].code;
    })
    .catch((data, status) => {
      console.log("Geolocation request failed");
    });
})();
dropdown = document.getElementById("locations");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".country").innerHTML = null;
  document.querySelector(".price").innerHTML = null;
  select = dropdown.options[dropdown.selectedIndex].value;
  convert();
});

function convert() {
  let input = document.getElementById("userInput").value;
  if (select != "default") {
    localeCode = select;
    console.log(localeCode, select);
  } else if (select == "USA") {
    localeCode === "USD";
  } else {
    localCode = localeCode;
    console.log(localeCode, select);
  }
  if (localeCode === "USD") {
    document.querySelector(".country").innerHTML += "<li>USD</li>";
    document.querySelector(".price").innerHTML += `<li>$${input}</li>`;
  } else if (localeCode === "EUR") {
    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((res) => res.json())
      .then((response) => {
        let data = response.rates;
        let refined = Object.entries(data).filter(function (el) {
          return el[0] == localeCode;
        });
        let country = refined[0][0];
        let number = refined[0][1];
        let rounded = Number(number) * input;
        console.log(country, number, rounded);
        document.querySelector(".country").innerHTML += `<li>${country}</li>`;
        document.querySelector(
          ".price"
        ).innerHTML += `<li> &#8364; ${rounded.toFixed(2)} </li>`;
      })
      .catch((data, status) => {
        console.log(data, status, "failed to load currencies");
      });
  } else {
    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((res) => res.json())
      .then((response) => {
        let data = response.rates;
        let refined = Object.entries(data).filter(function (el) {
          return el[0] == localeCode;
        });
        let country = refined[0][0];
        let number = refined[0][1];
        let symbol = countryCodes.filter(function (country) {
          if (country.code === refined[0][0]) {
            return countryCodes;
          }
        });
        let symbolTwo = symbol[0].character;
        let rounded = Number(number) * input;
        document.querySelector(".country").innerHTML += `<li>${country}</li>`;
        document.querySelector(
          ".price"
        ).innerHTML += `<li> ${symbolTwo} ${rounded.toFixed(2)} </li>`;
      })
      .catch((data, status) => {
        console.log(data, status, "failed to load currencies");
      });
  }
}
