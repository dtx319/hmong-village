import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { useContext } from 'react'
import { AuthContext} from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                (user.loggedIn) ?
                (
                    <>
                        <h1>Welcome, { user.username }</h1>
                        <h2><i>What's your Rec?</i></h2>
                        <PostForm />
                        <br />
                        {/* <h3>Check out these other recommendations!</h3>
                        <PostList /> */}
                    </>
                )
                :
                ''
            }
        </div>
    )
}