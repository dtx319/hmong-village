import Home from './views/Home';
import Members from './views/Members';
import PostSingle from './views/PostSingle'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand-lg bg-dark mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/members" className="nav-link">Members</Link>
                <Link to="/posts" className="nav-link">Forum</Link>
              </li>
            </ul>
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


  )
}

export default App;