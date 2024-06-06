import React from "react";

const date = new Date();
const currentYear = date.getFullYear();
console.log(currentYear);

let userFname;
let userLname;
let birthYear;

do {
  userFname = prompt("Enter your first name");
} while (!userFname);

do {
  userLname = prompt("Enter your last name");
} while (!userLname);

do {
  birthYear = prompt("Enter your birth year");

  if (birthYear) {
    birthYear = Number(birthYear);
    if (isNaN(birthYear)) {
      alert("Please enter a valid number for your birth year.");
    } else if (birthYear < 1920) {
      alert("If your birth year is before 1920, visit the DMV office.");
    } else if (birthYear > currentYear) {
      alert(`Please enter a year between 1920 and ${currentYear}.`);
    }
  } else {
    alert("Birth year is required.");
  }
} while (isNaN(birthYear) || birthYear < 1920 || birthYear > currentYear);

let msg = {};

const textColor = {
  // color: "red",
  backgroundColor: "lightgreen",
};

if (Number(birthYear) < currentYear - 16) {
  msg = "Congrat! you can apply for driver's license!";
  // change css as well
} else {
  msg = "Sorry! you can NOT apply for driver's license at this time!";
}

// let birthYear = 1990;
// const root = ReactDOM.createRoot(document.getElementById("root"));

const newUser = new Array();
newUser.push("firstvalue");
// console.log(newUser);

// textColor.backgroundColor = "lightpink";

function Message() {
  return (
    <div className="Message">
      <h3 className="Alert">Alert:</h3>
      <p style={{ color: "black" }}>
        {userFname.toUpperCase()} {userLname.toUpperCase()} is{" "}
        {currentYear - birthYear} years old.
      </p>
      <p style={textColor}>{msg}</p>
    </div>
  );
}

export default Message;
