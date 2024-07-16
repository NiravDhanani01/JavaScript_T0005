let employees = [
  {
    employeeId: 1,
    name: "John Doe",
    attendance: [1, 1, 0, 1, 1, 1, 0, 1, 0.5, 1, 0, 1, 1, 1, 0, 1, 1, 0.5, 1, 1],
    salaryGrowth: [50000, 52000, 54000, 56000, 58000],
    salesTarget: [80000, 100000, 70000, 110000, 110000]
  },
  {
    employeeId: 2,
    name: "Jane Smith",
    attendance: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1],
    salaryGrowth: [55000, 57000, 59000, 61000, 63000],
    salesTarget: [100000, 120000, 90000, 140000, 200000]
  },
  {
    employeeId: 3,
    name: "Michael Johnson",
    attendance: [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0.5, 1, 0, 1, 1, 1, 0],
    salaryGrowth: [45000, 47000, 49000, 51000, 53000],
    salesTarget: [70000, 90000, 90000, 100000, 80000]
  },
  {
    employeeId: 4,
    name: "Emily Davis",
    attendance: [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5],
    salaryGrowth: [48000, 50000, 52000, 54000, 56000],
    salesTarget: [75000, 80000, 70000, 100000, 120000]
  },
  {
    employeeId: 5,
    name: "William Brown",
    attendance: [1, 1, 0, 1, 1, 0, 1, 1, 0.5, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0.5],
    salaryGrowth: [46000, 48000, 50000, 52000, 54000],
    salesTarget: [85000, 60000, 70000, 110000, 125000]
  },
];

let name = document.querySelector("#EmpName");
let presentDay = document.querySelector("#TotalPresentDays");
let Leave = document.querySelector("#TotalLeaves");
let presentAverage = document.querySelector("#average");
let SalaryGrowth = document.querySelector("#SalaryGrowt");
let searchByname = document.querySelector("#searchEmployeName");
let MinSalling = document.querySelector("#MinSalling")
let MaxSalling = document.querySelector("#MaxSalling")

let barChart = null;
let lineChart = null;

function statistics(employeeId) {
  let empName = employees[employeeId].name;
  name.innerText = empName;

  let totalDay = employees[employeeId].attendance.length;

  let present = 0;
  for (let i = 0; i < employees[employeeId].attendance.length; i++) {
    present += employees[employeeId].attendance[i];
  }
  presentDay.innerText = present;

  let leav = totalDay - present;
  Leave.innerText = leav;

  let average = ((present / totalDay) * 100).toFixed(2);
  presentAverage.innerText = `${average} %`;

  let startSalary = employees[employeeId].salaryGrowth[0];
  let lastSalary =
    employees[employeeId].salaryGrowth[
    employees[employeeId].salaryGrowth.length - 1
    ];
  let timePeriod = employees[employeeId].salaryGrowth.length;
  let growth = (
    ((lastSalary / startSalary) ** (1 / timePeriod) - 1) *
    100
  ).toFixed(2);
  SalaryGrowth.innerText = `${growth} %`;

  let min = employees[employeeId].salesTarget[0]
  for(let i =0;i<employees[employeeId].salesTarget.length;i++){
    if(min > employees[employeeId].salesTarget[i]  ){
      min = employees[employeeId].salesTarget[i]
    }
  }
  MinSalling.innerText = min;
  
  let max = employees[employeeId].salesTarget[0]
  for(let i =0;i<employees[employeeId].salesTarget.length;i++){
    if(max < employees[employeeId].salesTarget[i]  ){
      max = employees[employeeId].salesTarget[i]
    }
  }
  MaxSalling.innerText = max;
}

function makeChart(employeeId) {

  if (barChart) {
    barChart.destroy()
  }
  if (lineChart) {
    lineChart.destroy()
  }

  let displayBarChart = document.querySelector("#barChart").getContext("2d");
  barChart = new Chart(displayBarChart, {
    type: "bar",
    data: {
      labels: employees[employeeId].attendance.map((_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Employees Attendance Sheet",
          data: employees[employeeId].attendance,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  let displayLineChart = document.querySelector("#salaryGrowthChart").getContext("2d");

  lineChart = new Chart(displayLineChart, {
    type: "line",
    data: {
      labels: employees[employeeId].salaryGrowth.map(
        (yers, i) => `Year ${i + 1}`
      ),
      datasets: [
        {
          label: "Employess Yearly Salary Growth",
          data: employees[employeeId].salaryGrowth,
        },
        {
          label: "Yearly sales Target Achive",
          data: employees[employeeId].salesTarget,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

function FilterEmployee() {
  let empData = "";
  employees.map((name, i) => {
    empData += `
            <option value=${i}>${name.name}</option>
        `;
  });
  searchByname.innerHTML = empData;
  searchByname.addEventListener('change', function () {
    let setemployeeId = this.value;
    statistics(setemployeeId)
    makeChart(setemployeeId)
  })
}
FilterEmployee();
statistics(0);
makeChart(0);

