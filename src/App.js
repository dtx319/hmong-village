import Home from './views/Home';
import Members from './views/Members';
import Spotify from './views/Spotify';
import PostSingle from './views/PostSingle';
import PostList from './components/PostList';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import { useContext, useState, useEffect } from 'react';

function App() {
  const { login, logout, user } = useContext(AuthContext)



  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mx-3" href="#"><b>Hmong Village</b></a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
          {
              (user.loggedIn) ?
              <>
              {/* <Link to="/members" className="nav-link">Members</Link> */}
              <Link to="/postlist" className="nav-link">Explore</Link>
              <Link to="/spotify" className="nav-link">Spotify</Link>
              </>  
                :
                ''
            }

          </div>
          <div className="navbar-nav">
            {
              (user.loggedIn) ?
                <button onClick={logout} className="btn btn-primary">Logout</button>
                :
                <button onClick={login} className="btn btn-primary">Login</button>
            }
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotify" element={<Spotify />} />
          {/* <Route path="/members" element={<Members />} /> */}
          <Route path="/post">
            <Route path=":uid">
              <Route path=":id" element={<PostSingle />} />
            </Route>
          </Route>
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </div >

      {/* BODY SECTION */}
  

  

    </BrowserRouter>
  );
  }

export default App;