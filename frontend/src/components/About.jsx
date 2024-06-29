import React from 'react';
import Section from './Section';
import { BottomLine } from './design/Hero';

const About = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">About Us</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Learn more about our mission, vision, and the team behind our healthcare platform.
          </p>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
          <div className="relative z-1 bg-n-8 rounded-[1rem] p-8">
            <h2 className="h2 mb-4">Our Mission</h2>
            <p className="body-1 text-n-2 mb-6">
              Our mission is to provide accessible and affordable healthcare solutions to everyone, leveraging the power of technology and innovation.
            </p>

            <h2 className="h2 mb-4">Our Vision</h2>
            <p className="body-1 text-n-2 mb-6">
              We envision a world where quality healthcare is a fundamental right, and no one is left behind due to geographical or financial barriers.
            </p>

            <h2 className="h2 mb-4">Our Team</h2>
            <p className="body-1 text-n-2 mb-6">
              Our team consists of passionate healthcare professionals, technologists, and innovators who are dedicated to making a positive impact on people's lives.
            </p>
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default About;
