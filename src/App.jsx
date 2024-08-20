import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Discography from "./pages/Discography.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
           <Route index element={<HomePage/>}/>
           <Route path='/discography' element={<Discography/>}/>
       </Route>
    )
);

const App = () => {
    return <RouterProvider router={router}/>;
};

export default App;