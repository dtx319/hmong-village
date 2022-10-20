import Home from './views/Home';
import Members from './views/Members';
import PostSingle from './views/PostSingle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className="navbar-brand mx-3" href="#">Hmong Village</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/members" className="nav-link">Members</Link>
            <Link to="/posts" className="nav-link">Forum</Link>
          </div>
          <div className="navbar-nav ml-auto">
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
          <Route path="/members" element={<Members />} />
          <Route path="/post">
            <Route path=":id" element={<PostSingle />} />
          </Route>
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;