import './App.css';
import { AppBar } from '@mui/material';
import { Link } from "react-router-dom";
// import { Router, Route } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ResizePhoto from './components/ResizePhoto';
import InstgramFonts from './components/InstgramFonts';

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: 'black'
  }
  return (
    <div className="App">
      {/* <InstgramFonts /> */}

      <BrowserRouter>
        <AppBar position="static">
          < >
            <Link to="/resize" style={linkStyle}>Resize</Link>
            <Link to="/fonts" style={linkStyle}>Instgram Fonts</Link>
          </>
        </AppBar>
        <Routes>
          <Route path="/resize" element={<ResizePhoto />} />
          <Route path="/fonts" element={<InstgramFonts />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
