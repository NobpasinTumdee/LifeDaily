import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Home from './page/Home'
import RootLayout from './layouts/RootLayout';
import SellSheet from './page/SellSheet';
import BuySheet from './page/BuySheet';
import Help from './page/Help';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Not found this page...</h1>,
    children: [
      {path: "home", element: <Home />},
      {path: "sell-sheet", element: <SellSheet />},
      {path: "buy-sheet", element: <BuySheet />},
      {path: "help", element: <Help />},
    ]
  }
]);



const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

