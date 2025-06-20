// rafce
import { Link } from "react-router-dom";
import '../root.css';

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
        <div style={{ display: "flex", gap: "12px" }}>
            <p><Link to={'home'}>Home </Link> </p>
            <p><Link to="buy-sheet"> Buy Sheet </Link></p>
            <p><Link to="sell-sheet"> Sell Sheet </Link></p>
            <input
                // checkbox for theme web
                type="checkbox"
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={SelectedTheme === "dark"}
            />
        </div>
    );
};

export default MainNav;