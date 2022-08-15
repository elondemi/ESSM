import contract from "./utils/contract"
import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react"; 

const RegisterProfessor = () => {
    const professorAddress = useRef(null)
    const professorName = useRef(null)
    const professorSurname = useRef(null)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const registerProfessor = async () => {
            window.alert('Adding professor ' + professorName.current.value + ' ' + professorSurname.current.value + ' with address: ' + professorAddress.current.value)
            const res = await contract.methods.addProfessors(
                professorAddress.current.value,
                professorName.current.value,
                professorSurname.current.value
              ).send({
                from: '0x464B83b872472f0690918FC453920C152Fc2e64C',
                gas: '3000000'
              });
              return res
        }
        registerProfessor().then((res) => window.alert(JSON.stringify(res)))
    }
    return (
        <>
            <form id="form-professor" onSubmit={handleSubmit}>
                <h3>Add professor </h3>
                <input ref={professorAddress} type="text" placeholder="Write the address..." /> <br></br>
                <input ref={professorName} type="text" placeholder="Write professor name..." /> <br></br>
                <input ref={professorSurname} type="text" placeholder="Write professor surname..." />
                <input className="button-admin" type="submit" value="Add" />
            </form>
        </>
    )
}

export default RegisterProfessor