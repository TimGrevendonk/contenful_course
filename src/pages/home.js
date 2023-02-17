import { useState } from "react";
import AccordionLayout from "../components/accordionLayout";
import RoundFeature from "../components/roundFeature";
import Title from "../components/title";
import sliderImage from "../images/slider_one.jpg";

// Home function:
function Home({ ...props }) {
  //   console.log("[Debug home] rendered:", { props });
  const [accordionActiveIndex, setAccordionActiveIndex] = useState(1);

  return (
    <div className="container mb-1">
      <Title title={"this is the main page"} />
      <div id="carousel slide" data-ride="carousel">
        <div className="bg-slate-50">
          <img src={sliderImage} alt="team" />
        </div>
      </div>
      <section className="w-screen bg-slate-500 text-white p-3 border-t-2 border-t-black">
        <div className="text-center mb-3">
          <Title title={"Portfolio"} />
          <p>hello?</p>
          <div className="grid grid-cols-4">
            {[...Array(8)].map((item) => {
              return (
                <label className="hover:scale-110 m-4 ">
                  <img
                    className="rounded-lg"
                    src="http://unsplash.it/400/300?image=1"
                    alt="computer"
                  />
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-screen bg-slate-500 text-white p-3 border-t-2 border-t-black">
        <div className="text-center mb-3">
          <Title title={"Features"} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            delectus necessitatibus beatae et labore cupiditate libero nihil,
            exercitationem nostrum eveniet? Magni distinctio enim maxime
            consequatur, commodi fugit nobis amet dignissimos!
          </p>
        </div>
        <div className="grid grid-cols-3">
          <RoundFeature fontawesomeIcon="laptop" title="title1"></RoundFeature>
          <RoundFeature
            fontawesomeIcon="comments"
            title="title2"
          ></RoundFeature>
          <RoundFeature fontawesomeIcon="heart" title="title3"></RoundFeature>
          <RoundFeature fontawesomeIcon="leaf" title="title3"></RoundFeature>
          <RoundFeature fontawesomeIcon="cogs" title="title3"></RoundFeature>
          <RoundFeature
            fontawesomeIcon="download"
            title="title3"
          ></RoundFeature>
        </div>
      </section>

      <section className="w-screen bg-slate-500 text-white p-3 border-t-2 border-t-black">
        <div className="text-center mb-3">
          <Title title={"FAQ's"}></Title>
          <div className="flex flex-col justify-center items-center border-slate-700 border-2">
            <AccordionLayout
              title="section 1"
              index={1}
              activeIndex={accordionActiveIndex}
              setActiveIndex={setAccordionActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              expedita blanditiis,
            </AccordionLayout>
            <AccordionLayout
              title="section 2"
              index={2}
              activeIndex={accordionActiveIndex}
              setActiveIndex={setAccordionActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quasi, praesentium sunt temporibus illo aperiam modi assumenda.
            </AccordionLayout>
            <AccordionLayout
              title="section 3"
              index={3}
              activeIndex={accordionActiveIndex}
              setActiveIndex={setAccordionActiveIndex}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quasi, praesentium sunt temporibus illo aperiam modi assumenda.
            </AccordionLayout>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
