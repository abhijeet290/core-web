import { Link, Outlet } from "react-router";

export default function Details() {
  return (
    <>
      <h1>Welcome to Details page</h1>
      <nav
        style={{
          margin: "10px",
          display: "flex",
          gap: "10px",
          fontStyle: "none",
          textDecoration: "none",
        }}
      >
        {/* <Link to="/details">Details</Link> */}
        <Link to="hello">Hello</Link>
        <Link to="hi">Hi</Link>
      </nav>
      <Outlet />
    </>
  );
}
