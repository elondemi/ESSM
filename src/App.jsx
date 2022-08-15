import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 
import RegisterCourse from "./RegisterCourse"


function App() {
  const [students, setStudents] = useState([]);
  const [currentActive, setCurrentActive] = useState(null);
  const [attendanceCourses, setAttendanceCourses] = useState([]);
  const [currentGradeActive, setCurrentGradeActive] = useState(null);
  const ref = useRef(null);
  const getAllStudents = async () => {
    const res = await contract.methods.allStudents().call();
    setStudents(res);
  }
  

  const handleSubmitGrade = (e) => {
    e.preventDefault();

    const setGrade = async () => {
      await contract.methods.setGrade(
        parseInt(attendanceCourses[currentGradeActive][0]),
        ref.current.value,
      ).send({
        from: '0x6b9A41B9BfcE15c00cA92440F389b936681cc557'
      });
      window.alert(JSON.stringify({
        msg: 'Setting the grade ' +   ref.current.value   + ' from professor '   + attendanceCourses[currentGradeActive][1][1][2] + " " + attendanceCourses[currentGradeActive][1][1][3] +
        ' for student ' +  attendanceCourses[currentGradeActive][2][1]  + ' ' + attendanceCourses[currentGradeActive][2][2]
    }))
    }
    setGrade();
  }

  
  function handleClick() {
    console.log(ref.current.value);
  }


  
  useEffect(() => {
    getAllStudents();
  }, []);

  useEffect(() => {
    if(currentActive == undefined) return;
    setAttendanceCourses([]);
    const getCoursesAttendedBy = async () => {
      const res = await contract.methods.getCoursesAttendedBy(students[currentActive][0]).call();
      setAttendanceCourses(res);
    } 
    getCoursesAttendedBy();
  }, [currentActive]);


  return (
    <div className="App">
      <table id="table1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student[0]}</td>
              <td>{student[1]}</td>
              <td>{student[2]}</td>
              <td><button id="set" onClick={() => setCurrentActive(index)}>Set grade</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentActive != null && currentActive < students.length && (
        <>
        <table id="table2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject name</th>
              <th>ECTS</th>
              <th>Lecturer</th>
              <th>Student</th>
              <th>Student ID</th>
              <th>Set grade</th>
            </tr>
          </thead>
          <tbody>
     
            {attendanceCourses.map((courseAttended, index) => (
              <>
                <tr key={index}>
                  <td>{courseAttended[0]}</td>
                  <td>{courseAttended[1][2][1]}</td>
                  <td>{courseAttended[1][2][2]}</td>
                  <td>{courseAttended[1][1][2] + ' ' + courseAttended[1][1][3]}</td>
                  <td>{courseAttended[2][1] + ' ' + courseAttended[2][2]}</td>
                  <td>{courseAttended[2][0]}</td>
                  <td><button id="id"  onClick={() => setCurrentGradeActive(parseInt(index))}>Set grade</button></td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        
        {currentGradeActive != null && currentGradeActive < attendanceCourses.length && (
          <>
            <form id="form" onSubmit={handleSubmitGrade} >
              <label id="paragraf">Professor: {attendanceCourses[currentGradeActive][1][1][2] + " " + attendanceCourses[currentGradeActive][1][1][3] }  <br></br></label>
              <label  id="paragraf"> Subject: {attendanceCourses[currentGradeActive][1][2][1] } <br></br></label> 
              <label id="paragraf">Student: {attendanceCourses[currentGradeActive][2][1]  + " " + attendanceCourses[currentGradeActive][2][2]}  <br></br> </label>
              <label for="field"> Grade: </label> 
              <input  id="field" type="number" key={attendanceCourses[currentGradeActive]} name="grade" ref={ref} />
              <input id="button" type="submit" value="set" onClick={handleClick} />
            </form>
            
          </>
        )}
      </>
      )}
        
      </div>
  )
}

export default App
