import style from "./User.module.css"
import React, { useState } from "react"

export default function User() {

    const [dropdown, setDropdown] = useState(false)

    return (
        <div className={style.container}>


            <ul>
                <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <img src="https://st2.depositphotos.com/2673929/6471/i/450/depositphotos_64716325-stock-photo-sunrise-on-earth.jpg" />

                    <div className={dropdown ? style.visibilit : style.hidden}>
                        <div>
                            <h2>Comunidade dev</h2>
                        </div>
                        <div>
                            <p><div className={style.circle}></div>Online</p>
                        </div>
                    </div>


                </li>
            </ul>
        </div>
    )
}

/*
<div>
                <div>
                    <h2>Comunidade dev</h2>
                </div>
                <div>
                    <p><div className={style.circle}></div>Online</p>
                </div>
            </div>
*/