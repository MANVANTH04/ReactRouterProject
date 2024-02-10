import { NavLink, Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className='root'>
    <header>
      <nav>
      <h1>Jobrouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="help">Help</NavLink>
      </nav>
    </header> 
    <main>
        <Outlet/>
    </main>

    <footer>
        <h3>welcome to footer</h3>
    </footer>

    </div>
  )
}


export default RootLayout