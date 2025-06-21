import MainNav from '../components/MainNav'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <MainNav />
            <div style={{height: '70px'}}></div>
            <Outlet />
        </>
    )
}

export default RootLayout