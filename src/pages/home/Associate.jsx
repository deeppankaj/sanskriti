import React, { useState } from "react";
import { assoicate, c1, c2, c3, c4 } from "../../assets";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Associate = () => {
  const [counterOn, setCounterOn] = useState(false);
  const clients = [
    {
      img:c1,
      count:14,
      text:"Years of Serving Happily"
    },
    {
      img:c2,
      count:135600,
      text:"Satisfied Clients"
    },
    {
      img:c3,
      count:40,
      text:"Cities Covered"
    },
    {
      img:c4,
      count:44,
      text:"Maps book Published"
    }
  ]
  return (
    <>
      <div className="md:flex gap-4 items-center p-2 mb-10  justify-center">
        <div className="flex flex-col gap-2 mx-4">
          <h1 className="h2 " style={{ fontWeight: "600" }}>
            Associates With us
          </h1>
          <p>
            Associate with us and experience the power of collaboration.
            Together, we can reach new heights and unlock boundless
            opportunities. Join our network of innovators, creators, and
            visionaries, where your ideas are valued and your skills are
            amplified. Let's forge a partnership that thrives on trust,
            integrity, and shared success. Together, we can build a brighter
            future and make a lasting impact on the world. Come, associate with
            us, and let's embark on an extraordinary journey together.
          </p>
          <button className="btn btn-primary w-28 mt-4">Read More</button>
        </div>
        <img src={assoicate} alt="" className="" />
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="flex gap-2 px-4 shadow flex-wrap mb-10">
          {clients.map((client,i)=>{
            return(<div key={i} className="m-2 w-[22%]">
            <div className="flex justify-center">
              <img src={client.img} alt="" width={100} />
            </div>
            {counterOn && (
              <h1 className="h2 text-center" style={{ fontWeight: "1000" }}>
                <CountUp start={0} end={client.count} /> +{" "}
              </h1>
            )}
            <h1 className="h4 text-center" style={{ fontWeight: "700" }}>
              {client.text}
            </h1>
          </div>)
          })}
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Associate;
