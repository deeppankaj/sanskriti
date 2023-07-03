import React, { useState } from "react";
import { s1, s2, s3, s4, s5, s6 } from "../../assets";

const Service = () => {
  const services = [
    {
      img: s1,
      text: "Fuel your brand with new-age approaches which have the potential to\r\n            let you soar greater heights and drive results with strategic\r\n            marketing solutions. We are a full-service 360 degree marketing\r\n            campaign agency. Our highly experienced and dedicated team employs\r\n            innovative and extremely effective strategies helping your business\r\n            discover radical ways of reaching your audience in visually\r\n            compelling and memorable ways.",
    },
    {
      img: s2,
      text: "Words are powerful in creating or bringing down a brand\u2019s image. Right content, when reaches out to your prospects, builds a brand\u2019s credibility which can influence their decisions. Simultaneously, words are the main conveyors of meaning for search engines. That is why it is essential to thrive on result- oriented content driving your brand to Page 1 privileges. Our team of professional writers provide great content which lets your business stand out among many.",
    },
    {
      img: s3,
      text: "Our Content Planners take a scientific approach to crafting content marketing campaigns to achieve client goals. We ensure that only high-quality content is put forth your target audience delivering the effective outbound communication. Our team researches every scope of competitor\u2019s perspective before delivering a well-planned content marketing campaign.",
    },
    {
      img: s4,
      text: "For an enhanced worldwide web presence and better user engagement, search engine optimised (SEO) articles are the cornerstone of effective digital marketing for any business. Our writers use well-researched keywords optimally to make the content more visible to search engines.",
    },
    {
      img: s5,
      text: "Social Media content promotion, distribution and strategy is essential to maximise your digital content marketing strategy. Our Social Media Strategists develop innovative social strategies and create engaging content that augments your brand presence connecting well with your target audience. Be it Facebook, Instagram, Twitter, YouTube or any other platform, our team makes your brand dynamic with high-quality content.",
    },
    {
      img: s6,
      text: "Our squad of graphic designers and creative developers think out-of-the-box to craft attention grabbing visuals for your brochures, banners, flyers, logos, and many more. Our team ensures that their creativity conveys your business ideas to the audience through impressive graphic designs, both online and offline.",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="h1 text-center mb-5" style={{ fontWeight: 600 }}>
        Our Services
      </h1>
      <div className="flex gap-4 flex-wrap p-2 justify-center ">
        {services.map((service, i) => {
          return (
            <div
              key={i}
              className="w-full md:w-[30%] flex justify-center items-center flex-col bg-white p-4 hover:shadow-lg rounded-md transition-all border"
            >
              <img src={service.img} width={250} alt="" />
              <p className="text-md mt-4 text-start">{service.text}</p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Service;
