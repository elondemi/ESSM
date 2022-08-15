import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 

const RegisterSubject = () => {
    const subjectName = useRef(null);
    const ects = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerSubject = async () => {
            window.alert('Adding subject ' + subjectName.current.value + ' with ' + ects.current.value + ' ECTS')
            const res = await contract.methods.addSubjects(
                subjectName.current.value,
                ects.current.value,
              ).send({
                from: '0x464B83b872472f0690918FC453920C152Fc2e64C',
                gas: '3000000'
              });
              return res
        }
         registerSubject().then((res) => window.alert(JSON.stringify(res)))
    }
    return (
        <>
            <form  id="form-subject" onSubmit={handleSubmit}>
                <h3>Add subject</h3>
                <input ref={subjectName} type="text" placeholder="Write subject name..."></input>
                  <br></br>
                <input ref={ects} type="number" placeholder="Write ECTS..."></input>
                <input className="button-admin" type="submit" value="Add" />
            </form>
        </>
    )
}

export default RegisterSubject