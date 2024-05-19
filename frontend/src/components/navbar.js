import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container" >
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
