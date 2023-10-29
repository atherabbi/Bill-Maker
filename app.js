// Short Date Conversion Format Script
function formatAsShortDate(dateStr) {
  const dateObj = new Date(dateStr + "Z");
  const formattedDate = dateObj.toISOString("Asia/Dhaka");
  return formattedDate.split("T")[0];
}

// Long Date Conversion Format Script
function formatAsLongDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}

// start select owner element
let ownerNameEn = document.querySelector("#ownerNameEn");
let ownerNameBn = document.querySelector("#ownerNameBn");
let ownerAddress = document.querySelector("#ownerAddress");
let ownerMobile = document.querySelector("#ownerMobile");
let ownerEmail = document.querySelector("#ownerEmail");
let sarkarLogo = document.querySelector("#sarkarLogo");
sarkarLogo.style.display = "none";
let signature = document.querySelector("#signature");
signature.style.display = "none";

// end select owner element

// start owner information
let ownerInformation = {
  samsulIslamLakriMill: {
    nameEn: "M/S. SAMSUL ISLAM LAKRI MILL",
    nameBn: "মেসার্স সামছুল ইসলাম লাকড়ী মিল",
    address: "Kamaura, Ashuganj, Brahmanbaria.",
    mobile: "+8801855 691 366",
    email: "samsulislamlakrimill@gmail.com",
  },
  sarkarLackryMill: {
    nameEn: "M/S. SARKAR LACKRY MILL",
    nameBn: "মেসার্স সরকার লাকড়ী মিল",
    address: "Bahadurpur, Dakhkinpara, Ashuganj, Brahmanbaria.",
    mobile: "+8801864 604 209",
    email: "dulal2012@yahoo.com",
  },
};
// end owner information

// start getting data from owner details form
let ownerDetailsForm = document.querySelector("#ownerDetailsForm");
ownerDetailsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let ownerProfile = document.querySelector("#ownerProfile").value;
  //start Assign Value
  if (ownerProfile == 1) {
    signature.style.display = "block";
    signature.src = "samsulSignature.jpg";
    sarkarLogo.style.display = "none";
    ownerNameEn.innerText = ownerInformation.samsulIslamLakriMill.nameEn;
    ownerNameEn.style.fontWeight = "bold";
    ownerNameEn.style.color = "green";
    ownerNameBn.innerText = ownerInformation.samsulIslamLakriMill.nameBn;
    ownerNameBn.style.color = "green";
    ownerAddress.innerText =
      "Factory Office : " + ownerInformation.samsulIslamLakriMill.address;
    ownerMobile.innerText =
      "Mobile : " + ownerInformation.samsulIslamLakriMill.mobile;
    ownerEmail.innerText =
      "Email : " + ownerInformation.samsulIslamLakriMill.email;
  } else if (ownerProfile == 2) {
    signature.style.display = "block";
    signature.src = "sarkarSignature.jpg";
    sarkarLogo.style.display = "block";
    ownerNameEn.innerText = ownerInformation.sarkarLackryMill.nameEn;
    ownerNameEn.style.fontWeight = "bold";
    ownerNameEn.style.color = "red";
    ownerNameBn.innerText = ownerInformation.sarkarLackryMill.nameBn;
    ownerNameBn.style.color = "green";
    ownerAddress.innerText =
      "Factory Office : " + ownerInformation.sarkarLackryMill.address;
    ownerMobile.innerText =
      "Mobile : " + ownerInformation.sarkarLackryMill.mobile;
    ownerEmail.innerText = "Email : " + ownerInformation.sarkarLackryMill.email;
  } else {
    ownerNameBn.innerText = "Tap here to load owner profile";
    ownerAddress.innerText = "factory address, mobile number & email address.";
  }
  //end Assign Value
});
// end getting data from owner details form

// start select Billing element
let billNo = document.querySelector("#billNo");
let billingDate = document.querySelector("#billingDate");
let billingName = document.querySelector("#billingName");
let billingAddress = document.querySelector("#billingAddress");
// end select Billing element

// start billing information
let billingInformation = {
  aswadCompositeMillsLtd: {
    name: "<b> Aswad Composite Mills Ltd. </b>",
    address: "Baridarchalla, Sreepur, Gazipur.",
  },
  arkayKnitDyeingMillsLtd: {
    name: "<b> Arkay Knit Dyeing Mills Ltd </b>",
    address: "Ziranibazar, Kashimpur, Gazipur.",
  },
};
// end billing information

// start getting data from billing details form
let billingDetailsForm = document.querySelector("#billingDetailsForm");
billingDetailsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let billingProfile = document.querySelector("#billingProfile").value;
  let formBillNo = document.querySelector("#formBillNo").value;
  let formBillingDate = document.querySelector("#formBillingDate").value;
  let formattedDate = formatAsLongDate(formBillingDate);
  //start Assign Value
  if (billingProfile == 1) {
    billNo.innerText = "Bill No. " + formBillNo;
    billingDate.innerText = "Date : " + formattedDate;
    billingName.innerHTML =
      "Name : " + billingInformation.aswadCompositeMillsLtd.name;
    billingAddress.innerText =
      "Address : " + billingInformation.aswadCompositeMillsLtd.address;
  } else if (billingProfile == 2) {
    billNo.innerText = "Bill No. " + formBillNo;
    billingDate.innerText = "Date : " + formattedDate;
    billingName.innerHTML =
      "Name : " + billingInformation.arkayKnitDyeingMillsLtd.name;
    billingAddress.innerText =
      "Address : " + billingInformation.arkayKnitDyeingMillsLtd.address;
  } else {
    billNo.innerText = "Bill No. ";
    billingDate.innerText = "Date : ";
    billingName.innerText = "Name : (Tap to load)";
    billingAddress.innerText = "Address : (Tap to load)";
  }
  //end Assign Value
});
// end getting data from owner details form

//
// start table manupulation
// select Form Elements
let formSerialNumber = document.querySelector("#formSerialNumber");
let tableSerialNumber = 0;
let formProductName = document.querySelector("#formProductName");
let formChallanNo = document.querySelector("#formChallanNo");
let formChallanDate = document.querySelector("#formChallanDate");
let formQuantity = document.querySelector("#formQuantity");
let formRate = document.querySelector("#formRate");
let formAmount = document.querySelector("#formAmount");

// Select Table
let table = document.querySelector("#myTable");
let rowIndexNumber = 0;

// checking talbe is working or not?
// console.log(table.rows[0].cells);

// select modal form & prevent page loading
let dataManipulateForm = document.querySelector("#dataManipulateForm");
dataManipulateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // For each row after the model submit for anything, total amount will be count..
  let totalSum = 0;
  let totalQuantity = 0;
  let tableTotalAmount = document.querySelector("#tableTotalAmount");
  let tableTotalQuantity = document.querySelector("#tableTotalQuantity");
  let inWord = document.querySelector("#inWord");

  for (i = 1; i < table.rows.length - 1; i++) {
    totalSum += parseFloat(table.rows[i].cells[6].innerText);
    totalQuantity += parseFloat(table.rows[i].cells[4].innerText);
  }
  tableTotalAmount.innerText = totalSum;
  tableTotalQuantity.innerText = totalQuantity;
  // amount to inword convert
  inWord.innerText = "Taka in Words: " + convertToWordsBDT(totalSum);
  // console.log(convertToWordsBDT(totalSum));
});

// click Event Listener to know which row is clicked
table.addEventListener("click", function (event) {
  // selecting tr tag with index number & checking
  const target = event.target.parentElement;
  const rowIndex = target.rowIndex;
  // checking the selected index number
  console.log(rowIndex);
  // select form button to hide/unhide
  let addBtn = document.querySelector("#addBtn");
  let modifyBtn = document.querySelector("#modifyBtn");
  let deleteBtn = document.querySelector("#deleteBtn");
  // checking condition for button to hide/unhide
  if (rowIndex == 0) {
    // button reaction based on condition
    addBtn.style.display = "block";
    modifyBtn.style.display = "none";
    deleteBtn.style.display = "none";
    // assigned index numver to global veriable
    rowIndexNumber = rowIndex;
    // assigned initial & empty data
    formSerialNumber.value = tableSerialNumber + 1;
    formProductName.value = "Rice Husk";
    formChallanNo.value = "";
    formChallanDate.value = "";
    formQuantity.value = "";
    formRate.value = "";
    formAmount.value = 0;
    // // added event listener on formQuantity & formRate to change row amount live.
    dataManipulateForm.addEventListener("input", (event) => {
      if (event.target === formQuantity || event.target === formRate) {
        formAmount.value = formQuantity.value * formRate.value;
      }
    });
  } else if (rowIndex == table.rows.length - 1) {
    // if user select the last row, in this case do nothing, just store the index number on global veriable.
    rowIndexNumber = rowIndex;
  } else {
    // button reaction based on condition
    addBtn.style.display = "none";
    modifyBtn.style.display = "block";
    deleteBtn.style.display = "block";
    // assigned index numver to global veriable
    rowIndexNumber = rowIndex;
    // assigned data from table to the form to edit
    formSerialNumber.value = parseInt(
      table.rows[rowIndexNumber].cells[0].innerText
    );
    formProductName.value = table.rows[rowIndexNumber].cells[1].innerText;
    formChallanNo.value = table.rows[rowIndexNumber].cells[2].innerText;
    formQuantity.value = table.rows[rowIndexNumber].cells[4].innerText;
    formRate.value = table.rows[rowIndexNumber].cells[5].innerText;
    formAmount.value = table.rows[rowIndexNumber].cells[6].innerText;
    // date assigned with the help of a function for reformat date to default.
    formChallanDate.value = formatAsShortDate(
      table.rows[rowIndexNumber].cells[3].innerText
    );
  }
});

// Data Add Function Form to Table
function addData() {
  // applied condition if any field is emply function will not work.
  if (
    // if any of them emprty a alert will pop-up.
    formChallanNo.value == "" ||
    formChallanDate.value == "" ||
    formRate.value == "" ||
    formQuantity.value == ""
  ) {
    // the alert
    alert("Please enter all of the required information and try again.");
  } else {
    // else all the information will be store into the table

    // creating cell for new data
    let newRow = table.insertRow(table.rows.length - 1);
    newRow.setAttribute("data-bs-toggle", "modal");
    newRow.setAttribute("data-bs-target", "#dataManipulateModal");
    let cellSerialNumber = newRow.insertCell(0);
    let cellNameProduct = newRow.insertCell(1);
    let cellChallanNo = newRow.insertCell(2);
    let cellChallanDate = newRow.insertCell(3);
    let cellQuantity = newRow.insertCell(4);
    let cellrate = newRow.insertCell(5);
    let cellAmount = newRow.insertCell(6);

    // assiged value into new cell
    tableSerialNumber += 1;
    cellSerialNumber.textContent = parseInt(tableSerialNumber);
    cellNameProduct.textContent = formProductName.value;
    cellChallanNo.textContent = formChallanNo.value;
    cellChallanDate.textContent = formatAsLongDate(formChallanDate.value);
    cellQuantity.textContent = formQuantity.value;
    cellrate.textContent = formRate.value;
    cellAmount.textContent = formQuantity.value * formRate.value;
  }
}

// Data Modify Function
function modifyData() {
  if (
    // if any of them emprty a alert will pop-up.
    formChallanNo.value == "" ||
    formChallanDate.value == "" ||
    formRate.value == "" ||
    formQuantity.value == ""
  ) {
    // the alert
    alert("Please enter all of the required information and try again.");
  } else {
    // else all the information will be store into the table
    table.rows[rowIndexNumber].cells[0].textContent = parseInt(
      formSerialNumber.value
    );
    table.rows[rowIndexNumber].cells[1].textContent = formProductName.value;
    table.rows[rowIndexNumber].cells[2].textContent = formChallanNo.value;
    table.rows[rowIndexNumber].cells[3].textContent = formatAsLongDate(
      formChallanDate.value
    );
    table.rows[rowIndexNumber].cells[4].textContent = formQuantity.value;
    table.rows[rowIndexNumber].cells[5].textContent = formRate.value;
    table.rows[rowIndexNumber].cells[6].textContent = formAmount.value;
  }
}

// Data Delete Function
function deleteData() {
  table.rows[rowIndexNumber].remove();
  tableSerialNumber -= 1;

  // For each row after the deleted row, decrement the serial number by 1.
  for (i = rowIndexNumber; i < table.rows.length - 1; i++) {
    table.rows[i].cells[0].textContent -= 1;
  }
}

// Create a function to convert BDT amount to word
function numberToWords(number) {
  const units = ["", "Thousand", "Lakh", "Crore"];
  const toWords = (n) => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (n === 0) return "Zero";
    if (n < 10) return ones[n];
    if (n < 20) return teens[n - 10];
    if (n < 100) {
      const ten = tens[Math.floor(n / 10)];
      const one = ones[n % 10];
      return ten + (one ? "-" + one : "");
    }
    if (n < 1000) {
      const hundred = ones[Math.floor(n / 100)];
      const remainder = n % 100;
      if (remainder === 0) return hundred + " Hundred";
      return hundred + " Hundred " + toWords(remainder);
    }
  };

  const parts = [];
  let i = 0;

  while (number > 0) {
    const chunk = number % 1000;
    if (chunk !== 0) {
      const chunkWords = toWords(chunk);
      parts.unshift(chunkWords + (i > 0 ? " " + units[i] : ""));
    }
    number = Math.floor(number / 1000);
    i++;
  }

  return parts.join(" ");
}

function convertToWordsBDT(amount) {
  const corer = Math.floor(amount / 10000000);
  const lakh = Math.floor((amount % 10000000) / 100000);
  const thousand = Math.floor((amount % 100000) / 1000);
  const hundred = Math.floor((amount % 1000) / 100);
  const tensOnes = Math.floor(amount % 100);
  const paisa = Math.round((amount - Math.floor(amount)) * 100);

  const corerWords = numberToWords(corer);
  const lakhWords = numberToWords(lakh);
  const thousandWords = numberToWords(thousand);
  const hundredWords = numberToWords(hundred);
  const tensOnesWords = numberToWords(tensOnes);
  const paisaText = paisa > 0 ? numberToWords(paisa) + " Paisa " : "";

  const result =
    (corerWords ? corerWords + " Corer " : "") +
    (lakhWords ? lakhWords + " Lakh " : "") +
    (thousandWords ? thousandWords + " Thousand " : "") +
    (hundredWords ? hundredWords + " Hundred " : "") +
    (tensOnesWords ? tensOnesWords + " " : "") +
    (paisaText ? " and " + paisaText : "");

  return result + "Only.";
}

function saveCanvas() {
  document.querySelector("#hideBtn").style.display = "none";
  html2canvas(document.querySelector("#capture"), {
    allowTaint: true,
  }).then((canvas) => {
    var image = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = image;
    a.download = "Bill.jpg"; // Set the desired file name and extension
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  document.querySelector("#hideBtn").style.display = "block";
}
