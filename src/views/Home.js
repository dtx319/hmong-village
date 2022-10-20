import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import { useContext } from 'react'
import { AuthContext} from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div className="mb-5">
            <h1>What's your Rec?</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <p>Welcome, { user.username }</p>
                        <PostForm />
                        <PostList />
                    </>
                )
                :
                ''
            }
        </div>
    )
}