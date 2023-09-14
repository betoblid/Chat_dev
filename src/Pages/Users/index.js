import React, { useEffect, useState } from "react";
import axios from "axios";
import Card_Users from "../../componets/Card_Users";
import style from "./Users.module.css"

import Header from "../../componets/Header"
function Users() {

    const [dados, setDados] = useState([])

    useEffect(() => {
        async function dados() {

            const dadosapi = await axios.get("https://api-chat-six.vercel.app/users")
                .then(res => setDados(res.data))
        }
        dados()
    }, [])


    return (
        <>
            <Header />
            <div className={style.container}>
                {
                    dados.map((db) => <Card_Users nome={db.nome} avatar={db.avatar} data={db.date} />)
                }
            </div>
        </>
    )
}

export default Users;