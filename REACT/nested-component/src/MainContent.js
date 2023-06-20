import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    title: "Student Details->",
    count: 10,
    Student: [
      { rollno: 101, name: "Abhi", age: 16 },
      { rollno: 102, name: "shailu", age: 18 },
      { rollno: 103, name: "vinu", age: 20 },
      { rollno: 104, name: "vaibhav", age: 20 },
      { rollno: 105, name: "sid", age: 25 },
    ],
  };

  render() {
    // return <div>Main bodey Contains..</div>;
    return (
      <div>
        <h1 className="text-danger">{this.state}</h1>
        <table className="">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Student name</th>
              <th>age</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {this.state.Student.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    );
  }
}
