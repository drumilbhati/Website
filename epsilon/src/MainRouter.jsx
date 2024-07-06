import { BrowserRouter, Route, Link } from "react-router-dom"; //import the package
import App from "../App" //import your signIn page
import SignUp from "../SignUp" //import your signUp page

function MainRouter(){
    return(
        <BrowserRouter>
            <div className="container">
                <Link>
                    <Route path="/App" component={App} />
                    <Route path="/Signup" component={SignUp} />
                </Link>
            </div>
       </BrowserRouter>

    )
}
export default MainRouter