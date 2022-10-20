import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { useContext } from 'react'
import { AuthContext} from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div className="mb-5">
            {
                (user.loggedIn) ?
                (
                    <>
                        <p z-index>Welcome, { user.username }</p>
                        <h1>What's your Rec?</h1>
                        <PostForm />
                        <br />
                        {/* <h3>Check out these other recommendations!</h3>
                        <PostList /> */}
                    </>
                )
                :
                <>
                </>
            }
        </div>
    )
}