import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [react, setReact] = useState(false);
  const [position, setPosition] = useState("Frontend Developer");
  const [about, setAbout] = useState("");
  function handleSubmit() {
    alert("Job Application Submitted Successfully!");
  }

  return (
    <div className="container">
      <h1>Job Application Form</h1>
      <label>Full Name</label>
      <input
        type="text"placeholder="Enter Full Name" value={fullName} onChange={(e) => { setFullName(e.target.value); }} />
      <label>Email</label>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
      <label>Phone Number</label>
      <input type="tel" placeholder="Enter Phone Number"  value={phone}  onChange={(e) => {   setPhone(e.target.value); }} />

      <label>Gender</label>
      <div className="radio-group">
        <label className="option">
          <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => { setGender(e.target.value); }} />  Male </label>
        <label className="option">
          <input  type="radio" name="gender" value="Female"  checked={gender === "Female"} onChange={(e) => {setGender(e.target.value); }} />Female
        </label>
      </div>

      <label>Skills</label>
      <div className="checkbox-group">
        <label className="option">
          <input type="checkbox" checked={html} onChange={(e) => { setHtml(e.target.checked);  }} /> HTML </label>
        <label className="option">
          <input type="checkbox" checked={css} onChange={(e) => { setCss(e.target.checked); }} /> CSS </label>
        <label className="option">
          <input type="checkbox" checked={react} onChange={(e) => { setReact(e.target.checked);  }} /> React </label>
      </div>

      <label>Job Position</label>
      <select value={position} onChange={(e) => { setPosition(e.target.value); }} >
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
        <option>UI/UX Designer</option>
      </select>
      <label>About Yourself</label>
      <textarea rows="5" placeholder="Tell us about yourself..." value={about} onChange={(e) => { setAbout(e.target.value); }} ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default App;