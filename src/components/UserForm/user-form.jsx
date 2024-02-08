import React, { useState } from "react";
import "./user-form.css";

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(0);

  const [firstMsg, setFirstMsg] = useState("");
  const [lastMsg, setLastMsg] = useState("");
  const [gradeMsg, setGradeMsg] = useState("");

  const [acceptMsg, setAcceptMsg] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstMsg("please enter your first name");
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastMsg("please enter your last name");
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
    if (event.target.value > 554) {
      setAcceptMsg("Great you can start learning this year");
    } else {
      setAcceptMsg("Sorry try again next year");
    }
    setGradeMsg("please enter your psychometric grade");
  };

  const handleFirstNameBlur = () => {
    setFirstMsg("");
  };

  const handleLastNameBlur = () => {
    setLastMsg("");
  };

  const handleGradeBlur = () => {
    setGradeMsg("");
  };

  return (
    <div className="user-from">
      <form>
        <p style={{ color: "red" }}>{firstMsg}</p>
        <input
          value={firstName}
          placeholder="first name"
          onChange={handleFirstNameChange}
          onFocus={() => setFirstMsg("please enter your first name")}
          onBlur={handleFirstNameBlur}
        />
        <p style={{ color: "red" }}>{lastMsg}</p>
        <input
          value={lastName}
          placeholder="last name"
          onChange={handleLastNameChange}
          onFocus={() => setLastMsg("please enter your last name")}
          onBlur={handleLastNameBlur}
        />
        <p style={{ color: "red" }}>{gradeMsg}</p>
        <input
          value={grade}
          type="number"
          placeholder="psychometric"
          onChange={handleGradeChange}
          onFocus={() => setGradeMsg("please enter your psychometric grade")}
          onBlur={handleGradeBlur}
        />
        <p>{acceptMsg}</p>
      </form>
    </div>
  );
}
