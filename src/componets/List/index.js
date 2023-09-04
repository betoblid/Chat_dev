import Card from "../Card";

export default function List({ user }) {

    return (
        <>
            {
                user.map((b) => <Card key={b.id} nome={b.nome} coment={b.coment} avatar={b.avatar} date={b.date} value={b.id} />)
            }
        </>
    )
}