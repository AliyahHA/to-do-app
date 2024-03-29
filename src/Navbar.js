const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          /*
          This is how we can do inlign styling and create a dynamic value
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}*/
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
