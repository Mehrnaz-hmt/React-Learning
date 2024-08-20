import React from "react";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi iure corrupti repellendus beatae, praesentium exercitationem ratione hic quod minima, eaque dignissimos placeat consequuntur est quisquam accusamus temporibus? Molestias, aperiam!",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi iure corrupti repellendus beatae, praesentium exercitationem ratione hic quod minima, eaque dignissimos placeat consequuntur est quisquam accusamus temporibus? Molestias, aperiam!",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi iure corrupti repellendus beatae, praesentium exercitationem ratione hic quod minima, eaque dignissimos placeat consequuntur est quisquam accusamus temporibus? Molestias, aperiam!",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setIsOpen(!isOpen)}>{item.title}</div>
      {isOpen && <div className="accordion-item__content">{item.text}</div>}
    </div>
  );
};
