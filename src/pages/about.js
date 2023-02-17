import Title from "../components/title";

// About function:
function About({ ...props }) {
  //   console.log("[Debug about] rendered:", { props });

  const styles = {
    container: {
      // border: '1px solid red',
    },
  };

  return (
    <>
      <Title title={"this is the about page"} />
      <p>About page text.</p>
    </>
  );
}

export default About;
