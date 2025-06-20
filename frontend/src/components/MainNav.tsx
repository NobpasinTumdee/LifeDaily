// rafce
import { Link } from "react-router-dom";
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


    return (
        <div className="Main-nav-bar">
            <h2>LIFE DAILY</h2>
            <div className="sub-nav-bar">
                <Link to={'home'} className="Link-button">Home </Link>
                <Link to="buy-sheet" className="Link-button"> Buy Sheet </Link>
                <Link to="sell-sheet" className="Link-button"> Sell Sheet </Link>
                <input
                    // checkbox for theme web
                    type="checkbox"
                    id='darkmode-toggle'
                    onChange={toggleTheme}
                    defaultChecked={SelectedTheme === "dark"}
                />
                <img className="Profile" src="https://i.pravatar.cc/40" alt="Profile" />
            </div>
        </div>
    );
};

export default MainNav;