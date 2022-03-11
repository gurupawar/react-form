import React from "react";

const Table = ({ data }) => {
  console.log(data);
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>DOB</th>
          <th>Mobile</th>
          <th>Education</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.dob}</td>
            <td>{item.mobiNo}</td>
            <td>{item.education}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Table;
