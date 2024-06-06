import React from "react";

function Main() {
  return (
    <div className="Main">
      <h1 className="resources">Current Instructors</h1>

      <div class="grid-container">
        <div class="grid-item">
          <div class="grid-item-basic">
            <img
              src="https://online.houstondrivingschool.net/wp-content/uploads/2023/08/instructor-led.jpg"
              alt=""
            />
            <h3>Kangaroo</h3>
            <p>Kangaroo has a bad temper.</p>
            <button className="main-button">Schedule</button>
          </div>
        </div>

        <div class="grid-item">
          <div class="grid-item-basic">
            <img
              src="https://online.austindrivingschool.com/wp-content/uploads/2016/03/M1-featured-img-360x250.jpg"
              alt=""
            />
            <h3>Donkey</h3>
            <p>Donkey is the most experienced instructor.</p>
            <button className="main-button">Schedule</button>
          </div>
        </div>

        <div class="grid-item">
          <div class="grid-item-basic">
            <img
              src="https://www.straightforwarddriving.com/wp-content/uploads/2023/09/instructorled.jpg"
              alt=""
            />
            <h3>Owl</h3>
            <p>Owl has cool eyes.</p>
            <button className="main-button">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
