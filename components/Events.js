// components/ScheduleList.js
import React from "react";
import styles from "../app/events/Events.module.css";

const ScheduleList = () => {
  const scheduleItems = [
    { time: "8:00 AM", task: "Meet & Greet" },
    { time: "10:00 AM", task: "Registration" },
    { time: "1:00 PM", task: "Dinner" },
    { time: "2:00 PM", task: "Games" },
    { time: "4:00 PM", task: "Awarding" },
    { time: "6:00 PM", task: "Dessert" },
    { time: "8:00 PM", task: "Closing" },
  ];

  return (
    <div className="h-screen p-6 bg-gray-100">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Schedule</h2>
        <p className="text-gray-500">
          Here's the schedule of activities for the event.
        </p>
      </div>
      <h2 className="text-md font-bold mt-10">Friday, December 27, 2024</h2>
      <ul className={styles.scheduleList}>
        {scheduleItems.map((item, index) => (
          <li key={index} className={styles.scheduleItem}>
            <span className={styles.dot}></span>
            <span className={styles.time}>{item.time}</span>
            <span className={styles.task}>{item.task}</span>
            {index < scheduleItems.length - 1 && (
              <span className={styles.line}></span>
            )}{" "}
            {/* Add line if not the last item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
