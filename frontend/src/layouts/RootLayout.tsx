import MainNav from '../components/MainNav'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <MainNav />
            <Outlet />
        </>
    )
}

export default RootLayout