import { useEffect } from "react";

// NameList function:
function NameList({ ...props }) {
  // console.log("[name_list] rendered:", { props });

  const styles = {
    container: {
      // border: "1px solid red",
      margin: 5,
    },
    name: {
      border: "1px solid black",
    },
  };

  useEffect(() => {
    console.log("[nameList mounted]");

    return () => {
      console.log("[nameList unmounted]");
    };
  }, []);

  return (
    <>
      <div style={styles.container}>
        {props.students.map((name, index) => (
          <li key={name + index}>
            <button onClick={() => props.onVoteKill(name)}>Vote</button>
            {name}
          </li>
        ))}
      </div>
    </>
  );
}

export default NameList;
