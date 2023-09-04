import style from "./Card_Users.module.css"

export default function Card_Users({nome, avatar, data}){


    return(
        <div className={style.container}>
            <div className={style.Card_Users}>
                <div>
                    <img src={avatar} alt={"foto do usuario " + nome} />
                    <h3>{nome}</h3>
                </div>
                <div>
                    <p>Data de Registro: {data}</p>
                </div>
            </div>
        </div>
    )
}