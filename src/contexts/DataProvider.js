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
                    id: doc.id,
                    uid: doc.ref.parent.parent.id
                })
            })
            setPosts(postsArr)
        }
        getPosts()
    }, [user])

    const getPost = async function (uid, id, callback) {
        const docRef = doc(db, "users", uid, "posts", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }

    const addPost = async function (title, artist, body) {
        const post = {
            title: title,
            artist: artist,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'users', user.uid, 'posts')
        const docRef = await addDoc(collectionRef, post)

        post.id = docRef.id

        setPosts([post, ...posts])
    }

    const getMember = async function (uid, callback) {
        const docRef = doc(db, "users", uid)
        const docSnap = await getDoc(docRef)

        const member = {
            ...docSnap.data(),
            uid: docSnap.uid
        }

        callback(member)
    }

    const value = {
        posts: posts,
        getPost: getPost,
        addPost: addPost,
        getMember: getMember,
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}