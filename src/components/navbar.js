import { Link, NavLink } from "react-router-dom";

// Navbar function:
function Navbar({ ...props }) {
  //   console.log('[Debug navbar] rendered:', { props })

  const styles = {
    container: {
      // border: '1px solid red',
      background: "#44aaBB",
      padding: 10,
    },
    row: {
      display: "flex",
      flex: "column",
      listStyle: "none",
      margin: 0,
    },
    item: {
      marginLeft: 10,
      marginRight: 10,
    },
  };

  return (
    <>
      <nav style={styles.container}>
        <ul style={styles.row}>
          <li style={styles.item}>
            <NavLink to="/">
              <button> Home</button>
            </NavLink>
          </li>
          <li style={styles.item}>
            <NavLink to="/names">
              <button> Name list</button>
            </NavLink>
          </li>
          <li style={styles.item}>
            <NavLink to="/about">
              <button> About</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
