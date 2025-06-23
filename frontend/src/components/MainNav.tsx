// rafce
import { Link, useLocation } from "react-router-dom";
import '../root.css';
import './stylecomponent.css';

const MainNav = () => {
    //theme web
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark");
        localStorage.setItem("SelectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
        localStorage.setItem("SelectedTheme", "light")
    }
    const SelectedTheme = localStorage.getItem("SelectedTheme");
    if (SelectedTheme === "dark") {
        setDarkMode();
    }
    const toggleTheme = (e: any) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    // const param = useParams();
    // console.log(param);
    const location = useLocation();
    const isActive = (path :string) => location.pathname === path;

    return (
        <div className="Main-nav-bar">
            <h2>LIFE DAILY</h2>
            <div className="sub-nav-bar">
                <Link to={'home'} className={`Link-button ${isActive('/home') ? 'active' : ''}`}>Home </Link>
                <Link to="buy-sheet" className={`Link-button ${isActive('/buy-sheet') ? 'active' : ''}`}> Buy Sheet </Link>
                <Link to="sell-sheet" className={`Link-button ${isActive('/sell-sheet') ? 'active' : ''}`}> Sell Sheet </Link>
                <Link to="help" className={`Link-button ${isActive('/help') ? 'active' : ''}`}> Help </Link>
                <p className="icon-nav">🔔</p>
                <p className="icon-nav">🛒</p>
                <div className="theme-toggle-wrapper">
                    <label className="toggle-switch">
                        {/* // checkbox for theme web */}
                        <input type="checkbox" id='darkmode-toggle' onChange={toggleTheme} defaultChecked={SelectedTheme === "dark"} />
                        <span className="slider">
                            <div className="clouds">
                                <svg viewBox="0 0 100 100" className="cloud cloud1">
                                    <path
                                        d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                    ></path>
                                </svg>
                                <svg viewBox="0 0 100 100" className="cloud cloud2">
                                    <path
                                        d="M30,45 Q35,25 50,25 Q65,25 70,45 Q80,45 85,50 Q90,55 85,60 Q80,65 75,60 Q65,60 60,65 Q55,70 50,65 Q45,70 40,65 Q35,60 25,60 Q20,65 15,60 Q10,55 15,50 Q20,45 30,45"
                                    ></path>
                                </svg>
                            </div>
                        </span>
                    </label>
                </div>
                <Link to={'login'} style={{display:'flex'}}><img className="Profile" src="https://images2.alphacoders.com/129/1299701.jpg" alt="Profile" /></Link>
                {/* <img className="Profile" src="https://i.pravatar.cc/40" alt="Profile" /> */}
            </div>
        </div>
    );
};

export default MainNav;