import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css';
const Home = () => {
    return(
        <>
            <Navbar/>
            <div className="homeStyle">
                <h1>E-commerce</h1>
                <h5>For All Your Electronic Needs!</h5>
                <Link to='/products-list' className="link">Show Products List</Link>
            </div>
        </>
    )
}

export default Home;