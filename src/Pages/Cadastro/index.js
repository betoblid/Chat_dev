import React, { useState } from "react";
import style from "./Cadastro.module.css"
import axios from "axios"


const Form = () => {

    const [nome, setNome] = useState("")
    const [Avata, setAvata] = useState("")

    let db = [
        {
            nome: nome,
            avatar: Avata
        }
    ]

    function cadastra() {

        if (localStorage.length > 0) {

            alert("ja existe um login")
        } else {
            axios.post("https://api-chat-six.vercel.app/users", {
                nome: nome,
                avatar: Avata
            }).catch((error) => console.error(error))

            //salvoando no localstorang para usar no futuro
            localStorage.setItem("cadastro", JSON.stringify(db))
            
            alert("Login feito com Sucesso")
        }
    }

    return (
        <div className={style.container}>

            <div className={style.card_cadastro}>
                <h1>Cadastro</h1>
                <label for="txNome">Nome:</label>
                <input
                    type="text"
                    id="txNome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                <label for="txAvata">Avatar URL:</label>
                <input
                    type="text"
                    id="txAvata"
                    value={Avata}
                    onChange={(e) => setAvata(e.target.value)} />

                <button onClick={() => cadastra()}>Salvar</button>
            </div>
        </div>
    )
}
export default Form;