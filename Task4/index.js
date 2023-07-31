import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Joinus from './Joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Joinus/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));