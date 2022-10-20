import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import { DataContext } from '../contexts/DataProvider'

export default function PostSingle() {
    const [post, setPost] = useState({})
    const { uid, id } = useParams()
    const { getPost } = useContext(DataContext)

    useEffect(() => {
        getPost(uid, id, setPost)
    }, [])

    return (
        <div>
            <Post post={post} />
        </div>
    )
}

