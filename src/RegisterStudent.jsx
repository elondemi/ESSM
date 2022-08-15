import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 

const RegisterStudent = () => {
    const studentsName = useRef(null)
    const studentSurname = useRef(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerStudent = async () => {
            window.alert('Adding student ' + studentsName.current.value + ' ' + studentSurname.current.value)
            const res = await contract.methods.addStudents(
                studentsName.current.value,
                studentSurname.current.value,
              ).send({
                from: '0x464B83b872472f0690918FC453920C152Fc2e64C',
                gas: '3000000'
              });
              return res
        }
        registerStudent().then((res) => window.alert(JSON.stringify(res)))
    }
    return (
        <>
            <form id="form-student" onSubmit={handleSubmit}>
                <h3>Add Student </h3>
                <input ref={studentsName} type="text" placeholder="Write student name..." /> <br></br>
                <input ref={studentSurname} type="text" placeholder="Write student surname..." />
                <input className="button-admin" type="submit" value="Add" />
            </form>
        </>
    )
}

export default RegisterStudent