import { heroBackground, ai } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import Generating from "./ChatbotNotif";
import { Link } from "react-router-dom";

const Hero = () => {
  const parallaxRef = useRef(null);
  
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Expert Diagnosis, Rapid Emergency Response, Powered by Avalanche {` `}
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Leverage the benefits of Expert diagnosis, virtual consultations, ambulance requests, AI chatbot, secure document transfer, ensuring comprehensive healthcare solutions.
            </p>
          </div>
          
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mt-[6rem]">
            <div className="relative z-1 bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] border-purple-500 border-4">
                <img
                  src={ai}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
              </div>
            </div>

            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="Hero image"
              />
            </div>
          </div>

        </div>

        <BottomLine />

        <div className="flex justify-center mt-8">
          <Link to ="/auth">
          <Button className="text-lg">
            Sign Up / Login
          </Button>
          </Link>
        </div>
      </Section>

      <div className="flex flex-col items-center mt-8 mb-12">
        <p className="body-1 max-w-3xl text-center mx-auto text-n-2 mb-8">
        Emergency: Click Below to Call an Ambulance / <br />आपातकालीन: एम्बुलेंस को कॉल करने के लिए नीचे क्लिक करें / <br />
        জরুরী: অ্যাম্বুলেন্স কল করতে নীচে ক্লিক করুন
        </p>
        <Link to="/miclistener">
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            CLICK ON EMERGENCY
          </button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
