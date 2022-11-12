import { Link } from 'react-router-dom';


export default function Post(props) {
    return (
        <div className="card my-5">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h2>{ props.post.title } by {props.post.artist}</h2>
                    )
                    :
                    <Link to={`/post/${props.post.uid}/${props.post.id}`}>{ props.post.title } by { props.post.artist }</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p><i><b>Why the recommendation?</b></i></p>
                        <p>"{ props.post.body }"</p>
                        {/* <p>Recommended by { props.post.uid } </p> */}
                    </div>
                )
                :
                ''
            }
        </div>
    )
}