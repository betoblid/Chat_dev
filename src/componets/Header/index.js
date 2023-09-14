import { useState } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header(){

const [menu, setMenu ] = useState(false)
    return(
        <header className={style.container_header}>
            <div className={style.logo}>
                <Link to="/">
                    <h1>HS</h1>
                </Link>
            </div>
            <div>
                <button onClick={() => menu ? setMenu(false) : setMenu(true)}>|||</button>
            </div>
            <div className={style.card_nav}>
                <nav className={menu ? style.visibilit : style.hidden}>
                        
                        <ul>
                            <li className={style.items}>
                                <Link to="/cadastro">Cadastro</Link>
                            </li>
                            <li className={style.items}>
                                <Link to="/users">Usuarios</Link>
                            </li>
                        </ul>

                </nav>
            </div>
        </header>
    )
}