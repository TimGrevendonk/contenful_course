// Title function:
function Title({ ...props }) {
  // console.log("[title] rendered:", { props });
  // * custom headertype if it is given as prop, defaults to h1.
  const Header = `h${props.headertype || 1}`;

  return (
    <>
      {/* default value "title" if prop is not given */}
      <Header className="font-bold">{props.title || "Title"}</Header>
    </>
  );
}

export default Title;
