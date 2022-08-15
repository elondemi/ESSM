import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 

const RegisterCourse = () => {
    const selectedProfessor = useRef(null)
    const selectedSubject = useRef(null)
    const [availableProfessors, setAvailableProfessors] = useState([])
    const [availableSubjects, setAvailableSubjects] = useState([])


    const getAllProfessors = async () => {
        const res = await contract.methods.allProfessors().call();
        setAvailableProfessors(res);
    }
    const getAllSubjects = async () => {
        const res = await contract.methods.allSubjects().call();

        setAvailableSubjects(res);
    }

    useEffect(() => {
        getAllProfessors();
        getAllSubjects();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerCourse = async () => {
            window.alert('Added the course with lecturer ' + availableProfessors[selectedProfessor.current.value][2] + ' ' + availableProfessors[selectedProfessor.current.value][3] + ' in subject '+ availableSubjects[selectedSubject.current.value][1] + ' with ' 
          + availableSubjects[selectedSubject.current.value][2] + ' ECTS')
            const res = await contract.methods.addCourses(
                selectedProfessor.current.value,
                selectedSubject.current.value,
              ).send({
                from: '0x464B83b872472f0690918FC453920C152Fc2e64C',
                gas: '3000000'
              });
              return res
        }
        registerCourse().then((res) => window.alert(JSON.stringify(res)))
    }
    return (
        <>
            <form id="form-course" onSubmit={handleSubmit}>
                <h3>Add Course</h3>
                <label>Select professor: </label>
                <select ref={selectedProfessor}>
                    {availableProfessors.map((professor) => (
                        <option key={professor.id} value={professor.id}>{professor.name} {professor.surname}</option>
                    ))}
                </select>  <br></br>
                
                <label>Select subject: </label>
                <select ref={selectedSubject}>
                    {availableSubjects.map((subject) => (
                        <option key={subject.id} value={subject.id}>{subject.subjectName} {subject.ects}</option>
                    ))}
                </select>
                <input className="button-admin" type="submit" value="Add" />
            </form>
        </>
    )
}

export default RegisterCourse