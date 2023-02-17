import Title from "./title";

// RoundFeature function: fontawesomeIcon, title, description,
function RoundFeature({ ...props }) {
  // console.log("[Debug roundFeature] rendered:", { props });

  const icon = `fa fa-${props.fontawesomeIcon || "xmark"} text-black fa-2xl`;

  return (
    <>
      <div className="m-2 feature-wrap align-center">
        <div className="h-[110px] w-[110px] bg-white hover:bg-gray-300 text-center rounded-full leading-[110px] border-solid border-2 border-slate-800 float-left mr-3">
          <i className={icon}></i>
        </div>
        <Title title={props.title}></Title>
        <p className="">
          {props.description ||
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas architecto quas excepturi repellendus. deu"}
        </p>
      </div>
    </>
  );
}

export default RoundFeature;
