// Footer function:
function Footer({ ...props }) {
  //   console.log("[Debug footer] rendered:", { props });

  const styles = {
    container: {
      // border: '1px solid red',
    },
    footer: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      paddingLeft: 10,
      background: "#44aaBB",
      fontSize: 14,
    },
    paragraph: {
      margin: 2,
    },
  };

  return (
    <>
      <div>
        <footer style={styles.footer}>
          <p style={styles.paragraph}>Tim grevendonk</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
