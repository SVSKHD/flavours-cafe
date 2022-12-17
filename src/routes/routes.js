import Home from "../pages/Home"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const TRoutes = () =>{
    const TVariables = [
        {
            path:"/",
            name:"Home",
            element:<Home/>,
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