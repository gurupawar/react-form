import { useState } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobiNo, setMobiNo] = useState("");
  const [education, setEducation] = useState("");
  const [data, setData] = useState([]);

  const [nameErr, setNameErr] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    if (name === "") {
      alert("plez enter valid name");
    }

    const data = {
      name,
      email,
      dob,
      mobiNo,
      education,
    };

    fetch("http://localhost:5500/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setName("");
    setEmail("");
    setEducation("");
    setMobiNo("");
    setDob("");

    alert("form submitted successfully 🎉");
  };

  const fetchData = async () => {
    await fetch("http://localhost:5500/posts")
      .then((res) => res.json())
      .then((db) => {
        setData(db);
      });
  };

  const hanleFetchData = (e) => {
    e.preventDefault();
    fetchData();
  };

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
    let len = e.target.value;
    if (len.length <= 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  };

  const handleMobiNo = (e) => {
    e.preventDefault();
    setMobiNo(e.target.value);
    if (e.target.value.length <= 9) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  };
  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="input__group">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={nameHandler}
              placeholder="Enter your name"
              required
            />
            {nameErr ? (
              <span className="error__message">
                name should be min 3 charector long
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="input__group">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@exmaple.com"
              required
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
              required
            />
          </div>
          <div className="input__group">
            <label htmlFor="mobiNo">Mobile No :</label>
            <input
              type="mobiNo"
              value={mobiNo}
              onChange={handleMobiNo}
              name="mobiNo"
              placeholder="Enter your mobile no."
              required
            />
            {passError ? (
              <span className="error__message">Enter Valid Mobile Number</span>
            ) : (
              ""
            )}
          </div>
          <div className="input__group">
            <label htmlFor="Education">Education</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              name="Education"
              placeholder="eg. MSc IT"
              required
            />
          </div>
          <div className="btn__group">
            <input className="btn" type="submit" value="Submit" />
          </div>
        </form>
        <input
          onClick={hanleFetchData}
          className="btn"
          type="submit"
          value="Fetch"
        />
      </div>
      <div className="table__container">
        {data ? <Table data={data} /> : ""}
      </div>
    </>
  );
}

export default App;
