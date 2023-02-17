// Accordion function:
function AccordionLayout({ ...props }) {
  //   console.log("[Debug accordion] rendered:", { props });
  function handleSetIndex() {
    props.activeIndex !== props.index && props.setActiveIndex(props.index);
  }
  return (
    <>
      <div
        onClick={() => handleSetIndex(props.index)}
        className="flex w-full justify-between mt-2 p-2 rounded-t border-2 border-b-0 bg-slate-400"
      >
        <div className="flex">
          <div className="text-white font-bold">{props.title}</div>
        </div>
      </div>
      {props.activeIndex === props.index && (
        <div className="w-full shadow-3xl rounded-b-lg m-0 p-4 bg-slate-400 border-2 border-t-0">
          {props.children}
        </div>
      )}
    </>
  );
}

export default AccordionLayout;
