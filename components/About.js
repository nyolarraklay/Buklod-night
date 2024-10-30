import React from "react";

const Section = ({ title, children }) => (
  <div className="mb-8 text-center">
    <hr className="border-1 border-black w-56 mx-auto mb-4" />

    <h1 className="text-5xl font-bold mb-2">{title}</h1>
    <p className="text-lg">{children}</p>
  </div>
);

export default function About() {
  return (
    <div className="h-screen mx-auto  max-w-lg px-8 py-10  flex flex-col justify-evenly">
      <Section title="Attire">
        "Formal attire is required for the event. Please come dressed to impress
        in your best formal wear—think elegant gowns and sharp suits to make the
        night memorable!".
      </Section>
      <Section title="Venue">TBD</Section>
      <Section title="Contact">
        For inquiries, you may contact Bro. Bong Nunez or Bro. Don Balbin
      </Section>
      <Section title="Children">
        "To ensure a memorable evening for all, we kindly request no children
        attend, allowing couples to fully enjoy the night."
      </Section>
    </div>
  );
}
