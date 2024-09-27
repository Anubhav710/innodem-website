"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Statictics = () => {
  const [clients, setClient] = useState({
    value: 0,
  });
  const [happyClients, setHappyClient] = useState({
    value: 0,
  });
  const [deal, setDeal] = useState({
    value: 0,
  });
  const [lead, setLead] = useState({
    value: 0,
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      clients,
      {
        value: 9850,
        onUpdate: () => setClient({ value: Math.floor(clients.value) }),
        duration: 1,
      },
      0
    );
    tl.to(
      happyClients,
      {
        value: 5020,
        onUpdate: () =>
          setHappyClient({ value: Math.floor(happyClients.value) }),
        duration: 1,
      },
      0.2
    );
    tl.to(
      deal,
      {
        value: 5608,
        onUpdate: () => setDeal({ value: Math.floor(deal.value) }),
        duration: 1,
      },
      0.3
    );
    tl.to(
      lead,
      {
        value: 7000,
        onUpdate: () => setLead({ value: Math.floor(lead.value) }),
        duration: 1,
      },
      0.4
    );
    ScrollTrigger.create({
      trigger: "#statictics",
      start: "top 80%",
      end: "bottom 80%",
      animation: tl,
    });
  }, []);

  return (
    <section id="statictics" className="bg-[#E2F6DB] py-24">
      <div className="max-w-screen-xl mx-auto flex justify-around md:flex-row flex-col items-center gap-12">
        <div className="text-[#173401]">
          <h1 id="counter" className="text-8xl font-semibold">
            {clients.value}
          </h1>
          <h4 className="text-4xl ">Total Clients</h4>
        </div>
        <div className="text-[#173401]">
          <h1 id="counter" className="text-8xl font-semibold">
            {happyClients.value}
          </h1>
          <h4 className="text-4xl ">Happy Clients</h4>
        </div>
        <div className="text-[#173401]">
          <h1 id="counter" className="text-8xl font-semibold">
            {deal.value}
          </h1>
          <h4 className="text-4xl ">Deal Closed</h4>
        </div>
        <div className="text-[#173401]">
          <h1 id="counter" className="text-8xl font-semibold">
            {lead.value}
          </h1>
          <h4 className="text-4xl ">Leads Secured</h4>
        </div>
      </div>
    </section>
  );
};

export default Statictics;
