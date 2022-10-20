import { useEffect, useState, useContext } from 'react';
import Post from './Post';
import { DataContext } from '../contexts/DataProvider';


export default function PostList() {
    const { posts } = useContext(DataContext)

    return (
        <>
        <h2>Check out these recommendations!</h2>
        <div>
            { posts.map((post) => <Post post={post} preview={true} key={post.id} />) }
        </div>
        </>
    )
}