import { useState } from "react"
import style from "./Card.module.css"
import axios from "axios"


export default function Card({ nome, avatar, coment, date, value }) {


    function btn(valor) {

        axios.delete(`https://api-chat-o8tn.onrender.com/${valor}`)

        window.location.reload()

    }

    const [btn_delet, setBtndelet] = useState(false)


    return (
        <div className={style.container} value={value}>

            <div className={style.card_btn}>
                <button onClick={() => btn_delet ? setBtndelet(false) : setBtndelet(true)}>...</button>

                <button 
                    className={btn_delet  ? style.on : style.a}
                    onClick={() => btn(value)}
                >delete</button>
            </div>
            <div className={style.card_user}>
                <div>
                    <p>{date}</p>
                </div>
                <div>
                    <h3>{nome}</h3>
                    <img src={avatar} alt={"foto de " + nome} title={nome}/>
                </div>
            </div>
            <div className={style.card_mensage}>
                <div>
                    <p>{coment}</p>
                </div>
            </div>
        </div>
    )
}