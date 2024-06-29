import React from 'react';
import Section from './Section';
import { BottomLine } from './design/Hero';

const Contact = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contact"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">Contact Us</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Get in touch with us for any inquiries, feedback, or support.
          </p>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl">
          <div className="relative z-1 bg-n-8 rounded-[1rem] p-8">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-n-1 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-n-1 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-n-1 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-n-7 text-n-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Contact;
