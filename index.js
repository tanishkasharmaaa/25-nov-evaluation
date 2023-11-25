let name = document.getElementById("name");
let doctorid = document.getElementById("doctor_id");
let specialization = document.getElementById("specialization");
let experience = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let myform = document.querySelector("form");
let alldata = [];
let tbody = document.createElement("tbody");



myform.addEventListener("submit", function (e) {
    e.preventDefault();

    let data = {};
    data.name = name.value;
    data.doctorid = doctorid.value;
    data.specialization = specialization.value;
    data.experience = experience.value;
    data.email = email.value;
    data.mobile = mobile.value;
    data.role = determineRole(experience.value);
    alldata.push(data);

    function determineRole(experience) {
        if (experience > 5) {
            return "Senior";
        } else if (experience >= 2 && experience <= 5) {
            return "Junior";
        } else if (experience <= 1) {
            return "Trainee";
        }
    }
    tbody.innerHTML = "";
    alldata.forEach((ele) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let button = document.createElement("button");

        td1.innerText = ele.name;
        td2.innerText = ele.doctorid;
        td3.innerText = ele.specialization;
        td4.innerText = ele.experience;
        td5.innerText = ele.email;
        td6.innerText = ele.mobile;
        td7.innerText = ele.role;
        button.textContent = "Delete";

        button.addEventListener("click", function () {
            row.remove(); // Remove the entire row
        });

        td8.appendChild(button);
        row.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(row);

        const allRows = document.querySelectorAll("tbody tr");
        allRows.forEach((row, index) => {
            if (index % 2 !== 0) {
                row.style.backgroundColor = "rgb(40, 128, 204)";
            }
        });
    });
});