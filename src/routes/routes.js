import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import Home from "../pages/Home"
import NotFound404 from "../pages/404NotFound";
const TRoutes = () =>{
    const TVariables = [
        {
            path:"/",
            name:"Home",
            element:<Home/>,
        },
        {
            path:"/about",
            name:"About",
            element:<NotFound404/>
        }
    ]
return(
    <>
    <Router>
        <Routes>
            {TVariables.map((r,i)=>(
                <Route key={i} path={r.path} element={r.element}/>
            ))}
        </Routes>
    </Router>
    </>
)
}
export default TRoutes