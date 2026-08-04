import { useState } from "react";
import "./JobApplicationForm.css";

function JobApplicationForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [react, setReact] = useState(false);
  const [city, setCity] = useState("Pune");
  const [about, setAbout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name :", fullName);
    console.log("Email :", email);
    console.log("Phone :", phone);
    console.log("Gender :", gender);
    console.log("HTML :", html);
    console.log("CSS :", css);
    console.log("React :", react);
    console.log("City :", city);
    console.log("About :", about);

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Job Application Form</h1>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          required/>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required/>
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required />
        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            /> Male </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />Female</label>
        </div>
        <label>Skills</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={html}
              onChange={(e) => {
                setHtml(e.target.checked);
              }}
            /> HTML </label>
          <label>
            <input
              type="checkbox"
              checked={css}
              onChange={(e) => {
                setCss(e.target.checked);
              }}
            /> CSS
          </label>
          <label>
            <input
              type="checkbox"
              checked={react}
              onChange={(e) => {
                setReact(e.target.checked);
              }}
            /> React</label>
        </div>
        <label>Preferred City</label>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }} >
          <option>Pune</option>
          <option>Mumbai</option>
          <option>Nashik</option>
          <option>Nagpur</option>
        </select>

        <label>About Yourself</label>
        <textarea
          rows="4"
          placeholder="Write about yourself..."
          value={about}
          onChange={(e) => {
            setAbout(e.target.value);
          }} ></textarea>

        <button type="submit">Submit Application</button>
        <div className="preview">
          <h2>Application Preview</h2>
          <p><strong>Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email} </p>
          <p> <strong>Phone:</strong> {phone}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p> <strong>Skills:</strong>{" "}
            {[
              html && "HTML",
              css && "CSS",
              react && "React",
            ]
              .filter(Boolean)
              .join(", ") || "None"}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>About:</strong> {about} </p>
        </div>
      </form>
    </div> );
}
export default JobApplicationForm;