import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 

const RegisterGrade = () => {
    const selectedStudents = useRef(null)
    const selectedCourses = useRef(null)
    const grade = useRef(null)
    const [availableStudents, setAvailableStudents] = useState([])
    const [availableCourse, setAvailableCourse] = useState([])


    const getAllStudents = async () => {
        const res = await contract.methods.allStudents().call();
        setAvailableStudents(res);
    }
    const getAllCourse = async () => {
        const res = await contract.methods.allCourses().call();

        setAvailableCourse(res);
    }

    useEffect(() => {
        getAllStudents();
        getAllCourse();
    }, [])

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerGrade = async () => {
            window.alert('request:' + selectedStudents.current.value + ' ' + selectedCourses.current.value)
            const res = await contract.methods.addGrades(
                selectedStudents.current.value,
                selectedCourses.current.value,
                grade.current.value
              ).send({
                from: '0x464B83b872472f0690918FC453920C152Fc2e64C',
                gas: '3000000'
              });
              return res
        }
        registerGrade().then((res) => window.alert(JSON.stringify(res)))
    }
    return (
        <>
            <form id="form-grade" onSubmit={handleSubmit}>
                <h3>Add Grade</h3>
                <label>Select course: </label>
                <select ref={selectedCourses}>
                    {availableCourse.map((course) => (
                        <option key={course.id} value={course.id}>{course.subject[1]} {course.lecturer.name} {course.lecturer.surname}</option>
                    ))}
                </select>  <br></br>
                
                <label>Select student: </label>
                <select ref={selectedStudents}>
                    {availableStudents.map((student) => (
                        <option key={student.id} value={student.id}>{student.name} {student.surname}</option>
                    ))}
                </select> <br></br>
                <input ref={grade} type="number" placeholder="Write the grade... " />
                <input className="button-admin" type="submit" value="Add" />
            </form>
        </>
    )
}

export default RegisterGrade