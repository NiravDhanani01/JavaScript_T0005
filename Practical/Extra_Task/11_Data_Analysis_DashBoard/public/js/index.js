
const stocks = [
  {
    stockId: 0,
    name: "ABC Corp",
    ticker: "ABC",
    price: [120, 122, 119, 145, 130],
    volume: [1500, 1800, 1200, 2000, 2200],
    marketCap: 5000000000
  },
  {
    stockId: 1,
    name: "EFG Inc",
    ticker: "EFG",
    price: [200, 210, 205, 215, 220],
    volume: [1300, 1700, 1600, 1800, 2100],
    marketCap: 10000000000
  },
  {
    stockId: 2,
    name: "JKL Ltd",
    ticker: "JKL",
    price: [80, 82, 79, 85, 90],
    volume: [1400, 1900, 1500, 2100, 2300],
    marketCap: 3000000000
  },
  {
    stockId: 3,
    name: "PQR Group",
    ticker: "PQR",
    price: [60, 62, 61, 64, 67],
    volume: [1600, 2000, 1400, 2200, 2500],
    marketCap: 2000000000
  },
  {
    stockId: 4,
    name: "XYZ Co",
    ticker: "XYZ",
    price: [150, 155, 153, 158, 162],
    volume: [1700, 1800, 1600, 2000, 2200],
    marketCap: 4000000000
  }
];

const companyName = document.querySelector("#CompanyName");
const ticker = document.querySelector("#Ticker");
const currentPrice = document.querySelector("#CurrentPrice");
const highestPrice = document.querySelector("#HighestPrice");
const lowestPrice = document.querySelector("#LowestPrice");
const marketCap = document.querySelector("#MarketCap");
const volume = document.querySelector("#Volume");
const companyButtons = document.querySelector("#companyButtons");

let lineChart = null;
let pieChart = null;

function displayStatistics(stockId) {
  const stock = stocks[stockId];
  companyName.innerText = stock.name;
  ticker.innerText = stock.ticker;
  currentPrice.innerText = `${stock.price[stock.price.length - 1]}`;
  let max = stock.price[0]
  for(let i = 0;i < stock.price.length;i++){
    if(max < stock.price[i]){
      max = stock.price[i]
    }
  }
  highestPrice.innerText = `${max}`;
  let min = stock.price[0]
  for(let i = 0;i < stock.price.length;i++){
    if(min > stock.price[i]){
      min = stock.price[i]
    }
  }
  lowestPrice.innerText = `${min}`;
  marketCap.innerText = `${stock.marketCap}`;
  volume.innerText = stock.volume[stock.volume.length - 1];
}

function createLineChart(stockId) {
  if (lineChart) {
    lineChart.destroy();
  }

  const PriceChart = document.querySelector("#priceChart").getContext("2d");
  const stock = stocks[stockId];

  lineChart = new Chart(PriceChart, {
    type: "line",
    data: {
      labels: stock.price.map((_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Stock Price",
          data: stock.price,
          borderColor: "#3498db",
          backgroundColor: "rgba(52, 152, 219, 0.2)",
          fill: true
        },
        {
          label: "Volume",
          data: stock.volume,
          borderColor: "#2ecc71",
          backgroundColor: "rgba(46, 204, 113, 0.2)",
          fill: true,
          yAxisID: 'y2'
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        y2: {
          beginAtZero: true,
          position: 'right'
        }
      }
    }
  });
}

function createPieChart() {
  if (pieChart) {
    pieChart.destroy();
  }

  const PortFoliChart = document.querySelector("#portfolioChart").getContext("2d");
  const portfolio = {
    labels: stocks.map(stock => stock.name),
    data: stocks.map(stock => stock.marketCap)
  };

  pieChart = new Chart(PortFoliChart, {
    type: "pie",
    data: {
      labels: portfolio.labels,
      datasets: [{
        label: 'Portfolio Distribution',
        data: portfolio.data,
      }]
    }
  });
}

function populateCompanyButtons() {
  stocks.forEach((stock, index) => {
    const button = document.createElement('button');
    button.textContent = stock.name;
    button.setAttribute("class","btn")
    button.addEventListener('click', () => {
      displayStatistics(index);
      createLineChart(index);
    });
    companyButtons.appendChild(button);
  });
}

populateCompanyButtons();
displayStatistics(0);
createLineChart(0);
createPieChart();


