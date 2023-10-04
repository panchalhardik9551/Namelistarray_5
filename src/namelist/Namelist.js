import React from 'react'

export default function Namelist() {

    const student = [
        { name: "hardik", email: "hardik@123", id: "1" },
        { name: "pavan", email: "pavan@456", id: "2" },
        { name: "sagar", email: "sagar@789", id: "3" }
    ]
    return (
        <>
            {
                student.map((data, a) => {
                    return <ul key={a}>
                        <li>{data.name}</li>
                        <li>{data.email}</li>
                        <li>{data.id}</li>
                    </ul>
                })
            }
        </>
    )
}
