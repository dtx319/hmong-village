
export default function Member(props) {
    return (
        <div className="card" onClick={() => props.clickHandler(props.member)}>
            <div className="card-body">
                <h2>{ props.member.firstName } {props.member.lastName } </h2>
                <p><strong>{ props.member.city }</strong></p>
            </div>
        </div>
    )
}