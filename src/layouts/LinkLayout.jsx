import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
    return (
        <div>
            <Link to={'/'} style={{fontWeight:"bold", margin: "20px"}}>დღევანდელობა </Link>
            <span>
            <Link to={'besiki'} style={{fontWeight:"bold", padding: "20px"}}>ბესიკის მხილება</Link>
            <Link to={'ilia'} style={{fontWeight:"bold", padding: "20px"}}>ილიას მხილება</Link>
            <Link to={'vazha'} style={{fontWeight:"bold", padding: "20px"}}>ვაჟა</Link>
            <Link to={'shota'} style={{fontWeight:"bold", padding: "20px"}}>შოთა</Link>
            </span>
            <span><Outlet /></span>
            <span>
            <Link to={'besiki'} style={{fontWeight:"bold", padding: "20px"}}>ბესიკი</Link>
            <Link to={'ilia'} style={{fontWeight:"bold", padding: "20px"}}>ილია</Link>
            <Link to={'vazha'} style={{fontWeight:"bold", padding: "20px"}}>ვაჟა</Link>
            <Link to={'shota'} style={{fontWeight:"bold", padding: "20px"}}>შოთა</Link>
            </span>
        </div>
    )
}

export default LinkLayout;