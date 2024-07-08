import { Link, Outlet } from "react-router-dom"

const Header2 = () => {
    return (
        <div>
        <div className="header header2">
            <Link to={'/'}>Logo</Link>

            <nav>
                <Link to={'/'}>home</Link>
                <Link to={'/page1'}>page 1</Link>
                <Link to={'/page2'}>page 2</Link>
                <Link to={'/page3'}>page 3</Link>
                <Link to={'/page3/page4'}>page 4</Link>
            </nav>
        </div>
        <Outlet />
        </div>
    );
}

export default Header2