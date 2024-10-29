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
    <div className="h-screen px-8 py-10 flex flex-col justify-evenly">
      <Section title="Attire">
        Formal attire is required for the event. The theme for this year is "Old
        Hollywood".
      </Section>
      <Section title="Venue">
        The event will be held at the Oslo East Chapel. The address is 123
        Chapel Road, Oslo, Norway.
      </Section>
      <Section title="Contact">
        For inquiries, you may contact the event organizers at
      </Section>
      <Section title="Children">
        Children are welcome to attend the event. There will be a separate
        program for them.
      </Section>
    </div>
  );
}
