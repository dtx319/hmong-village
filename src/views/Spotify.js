// // import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// // var token = 'BQDTqwAzyBYuOvkVfVLETQu61LMW6Vc-47i3bZrGUUQIQlmaXfiqon_ckjCCv8LFzAVUkA6GwuBAP-HJb6hMDVJL-Ol7gh-lFeqqhWObTRDGdkhIuGHeODQ5zCeKU7BM_7KRVyAPMvkm_0U5t1wLmzEgQ_vJ-Bug2NxO1HEY-bH9BR4'

// function Spotify() {
//     var CLIENT_ID = '3e5f3ca583bb4bcf8b94d59188b0a4ca';
//     var REDIRECT_URI = 'http://localhost:3000';
//     var AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
//     var RESPONSE_TYPE = "token";

//     const [token, setToken] = useState([])
//     const [searchKey, setSearchKey] = useState([])
//     const [songs, setSongs] = useState([])

//     useEffect(() => {
//         const hash = window.location.hash
//         var token = window.localStorage.getItem("token:")

//         if(!token && hash) {
//             token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//             window.location.hash = ''
//             window.localStorage.setItem("token", token)
//         }

//         setToken(token)
        
//     }, [])

//     const searchSongs = async function (e) {
//         const {data} = await axios.get("https://api.spotify.com/v1/search", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             params: {
//                 q: searchKey, 
//                 type: "song"
//             }
//         })

//         setSongs(data.songs.items)
//     }

//     const renderSongs = async function (props){
//         return songs.map(song => (
//             <div key={song.id}>
//                 {song.images.length ? <img src={song.images[0].url} alt=""/> : <div>No image</div>}
//                 {song.name}
//             </div>
//         ))
//     }

//     return (
//         <div className="App">
//             <div className="App-header text-center">
//                 <h1>Like a recommendation?</h1>
//                 <h3>Add it on Spotify</h3>
//                 {(token) ?
//                 <>
//                     <p>NOTE: You will need to login separately through Spotify</p>
//                     <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
//                 </>
//                 : 
//                 ''
//                 }
//                 {
//                 (token) ?
//                     <form onSubmit={searchSongs}>
//                         <input type="text" onChange={e => setSearchKey(e.target.value)}/>
//                         <button type={"submit"}>Search</button>
//                     </form>
//                     :
//                     <p>Please login</p>
//                 }

//                 {renderSongs()}

//             </div>
//         </div>
//     );
//     }

// export default Spotify;

