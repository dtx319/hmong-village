import { useContext } from "react"
import { DataContext } from "../contexts/DataProvider"

export default function PostForm() {
    const { addPost } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const title = formData.get('title')
        const artist = formData.get('artist')
        const body = formData.get('body')
        addPost(title, artist, body)
        event.target.reset()

    }

    return (
            <form onSubmit={handleSubmit}>
                <h3> Recommend a Song!</h3>
                <div className="form-group mb-3">
                    <label htmlFor="title">Song Title</label>
                    <input type="text" className="form-control" name="title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="body">Artist</label>
                    <input type="text" className="form-control" name="artist" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="body">Why are you recommending this song?</label>
                    <input type="text" className="form-control" name="body" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )
}