import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()

    useEffect(() => {
        const getPosts = async function () {
            const collectionRef = collectionGroup(db, 'posts')
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            setPosts(postsArr)
        }
        getPosts()
    }, [user])

    const getPost = async function (id, callback) {
        const docRef = doc(db, "posts", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }

    const addPost = async function (title, body) {
        const post = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'users', user.uid, 'posts')
        const docRef = await addDoc(collectionRef, post)

        post.id = docRef.id

        setPosts([post, ...posts])
    }

    const value = {
        posts: posts,
        getPost: getPost,
        addPost: addPost
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}