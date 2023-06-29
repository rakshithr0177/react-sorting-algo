import Sidebar from "../Sidebar/Sidebar"
import Visuals from "../Visuals/Visuals"
import './Container.css'

const Container = () => {
    return (
        <div className="container">
            <Sidebar />
            <Visuals/>
        </div>
    )
}

export default Container