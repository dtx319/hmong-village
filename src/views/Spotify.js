// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// var token = 'BQDTqwAzyBYuOvkVfVLETQu61LMW6Vc-47i3bZrGUUQIQlmaXfiqon_ckjCCv8LFzAVUkA6GwuBAP-HJb6hMDVJL-Ol7gh-lFeqqhWObTRDGdkhIuGHeODQ5zCeKU7BM_7KRVyAPMvkm_0U5t1wLmzEgQ_vJ-Bug2NxO1HEY-bH9BR4'

function Spotify() {
    const CLIENT_ID = '3e5f3ca583bb4bcf8b94d59188b0a4ca'
    const REDIRECT_URI = 'http://localhost:3000'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token:")

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ''
            window.localStorage.setItem("token", token)
        }

        setToken(token)
        
    }, [])

    const searchArtists = async function (e) {
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey, 
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = async function(){
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img src={artist.images[0].url} alt=""/> : <div>No image</div>}
                {artist.name}
            </div>
        ))
    }

    return (
        <div className="App">
            <div className="App-header text-center">
                <h1>Like a recommendation?</h1>
                <h3>Add it on Spotify</h3>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : ''}
                {
                (token) ?
                    <form onSubmit={searchArtists}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button type={"submit"}>Search</button>
                    </form>
                    :
                    <p>Please login</p>
                }

                {renderArtists()}

            </div>
        </div>
    );
    }

export default Spotify;

