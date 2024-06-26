import React from "react";

const data = [
  { month: "June", day: "17", time: "10:00 AM", staff: "Kangaroo" },
  { month: "June", day: "17", time: "11:00 AM", staff: "Kangaroo" },
  { month: "June", day: "17", time: "1:00 AM", staff: "Kangaroo" },
  { month: "June", day: "17", time: "9:00 AM", staff: "Owl" },
  { month: "June", day: "17", time: "9:30 AM", staff: "Donkey" },
  { month: "June", day: "18", time: "10:00 AM", staff: "Donkey" },
  { month: "June", day: "20", time: "4:00 pm", staff: "Owl" },
];

function Mainpart2() {
  return (
    <div style={{ overflowX: "auto" }} className="Main2">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key} className="trbody">
              <td>{val.month}</td>
              <td>{val.day}</td>
              <td>{val.time}</td>
              <td>{val.staff}</td>
              <td>
                <button className="scheduletime">Schedule</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Mainpart2;
