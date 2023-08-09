import React, { useEffect, useState } from "react";

const Options = ({ all, active, completed, todoItems, myTodo }) => {
  const [activeList, setActiveList] = useState("All");
  useEffect(() => {
    if (!todoItems === myTodo) {
      setActiveList("All");
      console.log("Yes");
    }
  }, [myTodo]);

  return (
    <footer className="footer-2">
      <button
        type="button"
        className={activeList === "All" ? "active" : ""}
        onClick={() => {
          setActiveList("All");
          all();
        }}>
        All
      </button>
      <button
        type="button"
        className={activeList === "Active" ? "active" : ""}
        onClick={() => {
          setActiveList("Active");
          active();
        }}>
        Active
      </button>
      <button
        type="button"
        className={activeList === "Completed" ? "active" : ""}
        onClick={() => {
          setActiveList("Completed");
          completed();
        }}>
        Completed
      </button>
    </footer>
  );
};

export default Options;
