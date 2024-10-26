/** @format */
import AnimatedText from "./AnimatedText";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div>
          {/* Linke Seite*/}
          <div>
            <h1 className="h1">Photogulasch</h1>
            <AnimatedText
              text="Fotografieren, das ist eine Art zu schreien, sich zu befreien. Es ist eine Art zu leben."
              className="!text-6xl !text-left !text-dark dark:!text-light xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-2xl"
            />
            <AnimatedText
              text="– Henri Cartier-Bresson"
              className="!text-xl !text-right !text-dark dark:!text-light"
            />
          </div>
          {/* Banner Image*/}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
