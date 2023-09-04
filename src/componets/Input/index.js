import style from "./Input.module.css"
import axios from "axios"

import React, { useEffect, useState } from "react"
import List from "../List"



export default function Input() {


    const [mensage, setMensage] = useState("")
    const [user, setUser] = useState([])
    const [controll, setControll] = useState(false)

    const api = "https://api-chat-o8tn.onrender.com/"
    //a cada envio de mensagem a api recebe um post e depois a mensagem e limpada e
    function comentar() {

        if (controll) {

            if (localStorage.length > 0) {

                let local = JSON.parse(localStorage.getItem("cadastro"))

                axios.post(api, {
                    nome: local[0].nome,
                    avatar: local[0].avatar === "" ? "https://live.staticflickr.com/2165/3536355889_2b22105055_b.jpg" : local[0].avatar,
                    coment: mensage

                }).then(t => setUser(t.data))
                setMensage("")

            } else {
                axios.post(api, {
                    nome: "Anonimo",
                    coment: mensage,
                    avatar: "https://live.staticflickr.com/2165/3536355889_2b22105055_b.jpg"
                })
                    .then(t => setUser(t.data))

                setMensage("")
            }

        } else {
            axios.get(api)
                .then(dado => setUser(dado.data))

            setControll(true)
        }

    }

    useEffect(() => { comentar() }, [])

    return (

        <>
            {
                controll ? <List user={user} c={false} /> : <List user={user} />
            }


            <div className={style.container_post}>

                <div>
                    <input
                        placeholder="digite um valor"
                        value={mensage}
                        onChange={(e) => setMensage(e.target.value)}

                    />
                </div>
                <div>
                    <button onClick={() => comentar()}>Enviar</button>
                </div>

            </div>
        </>
    )
}