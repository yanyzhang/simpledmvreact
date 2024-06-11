import React, { useState } from "react";

function Message() {
  const [showMessage, setShowMessage] = useState(false);
  const [userFname, setUserFname] = useState("");
  const [userLname, setUserLname] = useState("");
  const [birthYear, setBirthYear] = useState(null);
  const [msg, setMsg] = useState("");

  const handleLinkClick = () => {
    let fname, lname, bYear;
    const date = new Date();
    const currentYear = date.getFullYear();
    const namePattern = /^[A-Za-z]+$/;

    do {
      fname = prompt("Enter your first name");
      if (fname === null) return; // Handle cancel button
      if (!namePattern.test(fname)) {
        alert(
          "Please enter a valid first name containing only alphabetic characters."
        );
        fname = null;
      }
    } while (!fname);

    do {
      lname = prompt("Enter your last name");
      if (lname === null) return; // Handle cancel button
      if (!namePattern.test(lname)) {
        alert(
          "Please enter a valid last name containing only alphabetic characters."
        );
        lname = null;
      }
    } while (!lname);

    do {
      bYear = prompt("Enter your birth year");
      if (bYear === null) return; // Handle cancel button

      if (bYear) {
        bYear = Number(bYear);
        if (isNaN(bYear)) {
          alert("Please enter a valid number for your birth year.");
        } else if (bYear < 1920) {
          alert("If your birth year is before 1920, visit the DMV office.");
        } else if (bYear > currentYear) {
          alert(`Please enter a year between 1920 and ${currentYear}.`);
        }
      } else {
        alert("Birth year is required.");
      }
    } while (isNaN(bYear) || bYear < 1920 || bYear > currentYear);

    setUserFname(fname);
    setUserLname(lname);
    setBirthYear(bYear);

    if (bYear < currentYear - 16) {
      setMsg("Congrats! You can apply for a driver's license!");
    } else {
      setMsg("Sorry! You cannot apply for a driver's license at this time!");
    }

    setShowMessage(true);
  };

  const date = new Date();
  const currentYear = date.getFullYear();

  const textColor = {
    backgroundColor: "lightgreen",
  };

  return (
    <div className="Message">
      <a href="#message" onClick={handleLinkClick}>
        *Click here to see if you can apply*
      </a>
      {showMessage && (
        <>
          <h3 className="Alert">Alert:</h3>
          <p style={{ color: "black" }}>
            {userFname.toUpperCase()} {userLname.toUpperCase()} is{" "}
            {currentYear - birthYear} years old.
          </p>
          <p style={textColor}>{msg}</p>
        </>
      )}
    </div>
  );
}

export default Message;
