import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [dob, setDob] = useState("");
  const [mobiNo, setMobiNo] = useState("");
  const [education, setEducation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    const data = {
      name,
      email,
      id,
      dob,
      mobiNo,
      education,
    };

    console.log(data);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <div className="input__group">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Spider Man"
          />
        </div>
        <div className="input__group">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@exmaple.com"
          />
        </div>
        <div className="input__group">
          <label htmlFor="idNumber">Id Number :</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            name="idNumber"
            placeholder="005"
          />
        </div>
        <div className="input__group">
          <label htmlFor="dob">DOB :</label>
          <input
            type="text"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            name="dob"
            placeholder="03/12/2001"
          />
        </div>
        <div className="input__group">
          <label htmlFor="mobiNo">Mobile No :</label>
          <input
            type="number"
            value={mobiNo}
            onChange={(e) => setMobiNo(e.target.value)}
            name="mobiNo"
            placeholder="Enter your mobile no."
          />
        </div>
        <div className="input__group">
          <label htmlFor="Education">Education</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            name="Education"
            placeholder="MSc IT"
          />
        </div>
        <div className="btn__group">
          <input type="submit" value="Submit" />
          <input type="submit" value="Fetch" />
        </div>
      </form>
    </div>
  );
}

export default App;
