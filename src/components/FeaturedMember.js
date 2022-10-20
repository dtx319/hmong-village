
export default function FeaturedMember(props) {
    
    /* function displayInfo() {
    *     const infoElements = [];
    *   
    *     return infoElements
    * } */
    
    return (
        <div className="card text">
            <div className="card-body">
                <h2>{ props.member.firstName } {props.member.lastName } </h2>
                <p><strong>{ props.member.city }, { props.member.state }</strong></p>
            </div>
        </div>
    )
}