import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-8 text-center">
    <hr className="border-1 border-black w-56 mx-auto mb-4" />

    <h1 className="text-5xl font-bold mb-2">{title}</h1>
    <p className="text-lg">{children}</p>
  </div>
);

export default function About() {
  const markers = [
    {
      position: [59.930669188991544, 10.799199079763515],
      text: "Radisson RED Oslo Økern",
    },
  ];

  return (
    <div className=" mx-auto  max-w-lg px-8 py-10  flex flex-col justify-evenly">
      <Section title="Attire">
        &quot;Formal attire is required for the event. Please come dressed to
        impress in your best formal wear—think elegant gowns and sharp suits to
        make the night memorable!&quot;.
      </Section>
      <hr className="border-1 border-black w-56 mx-auto mb-4" />
      <div className="z-10 mb-8">
        <h1 className="mb-8 text-center"> Location. </h1>

        <h2>Radisson RED ØKERN </h2>
        <p> Lørenfaret 3, 0585 Oslo</p>
      </div>
      <Section title="Contact">
        For inquiries, you may contact Bro. Bong Nunez or Bro. Don Balbin.
      </Section>
      <Section title="Children">
        &quot;To ensure a memorable evening for all, we kindly request no
        children attend, allowing couples to fully enjoy the night.&quot;
      </Section>
    </div>
  );
}
