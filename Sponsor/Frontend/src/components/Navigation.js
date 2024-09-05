import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: "gray",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}
      >
        Home
      </Link>
      <Link
        to="/Post"
        style={{ margin: "0 10px", textDecoration: "none", color:"blue" }}
      >
        Add Payment
      </Link>
      <Link
        to="/q2"
        style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}
      >
        Question 2
      </Link>
      <Link
        to="/q3"
        style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}
      >
        Question 3
      </Link>
      <Link
        to="/q4"
        style={{ margin: "0 10px", textDecoration: "none", color: "blue" }}
      >
        Question 4
      </Link>
    </nav>
  );
}
