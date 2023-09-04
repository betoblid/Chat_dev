import style from "./Erro.module.css"
export default function Erro(){

    return(
        <div className={style.container}>
            <h1>Pagina não encontrada</h1>
            <p><strong>URL</strong> invalida ou pagina <strong>Não existe</strong></p>
            <button onClick={() => window.location.href="/"}>Voltar para Comunidade</button>
        </div>
    )
}