import { useEffect, useState, useContext } from 'react';
import Post from './Post';
import { DataContext } from '../contexts/DataProvider';
import { AuthContext } from '../contexts/AuthProvider';


export default function PostList() {
    const { posts } = useContext(DataContext)
    const { login } = useContext(AuthContext)

    return (
        <div>
            { posts.map((post) => <Post post={post} preview={true} key={post.id} />) }
        </div>
    )
}