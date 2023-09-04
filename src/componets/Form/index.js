import React from "react";
import { useFormAction } from "react-router-dom";

const Form = () => {

    return(
        <form>
            aaaa

            <button
                formAction={useFormAction("aa")}
                formMethod="POST"
            >

            </button>
        </form>
    )
}
export default Form;
/*
  <label for="txNome">Nome</label>
                <input
                    type="text"
                    maxLength="11"
                    placeholder="digite um nome"
                    title="nome que será usado na comunidade"
                    id="txNome"
                />
                <label for="txImg">Img</label>
                <input
                    type="text"
                    maxLength="50"
                    placeholder="URL de uma foto"
                    title="só aceitamos URLS de fotos, Caso não tenha foto uma foto aleatoria será gerada"
                    id="txImg"
                />
*/