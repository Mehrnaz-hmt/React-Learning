import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
      <div
        className="accordion-item__header"
        onClick={function () {
          setIsOpen((is) => !is);
        }}
      >
        <div>{item.title}</div>
        {/* <ChevronDownIcon
          style={{
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
        /> */}
        <svg
          style={{
            display: "inline",
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>
      </div>

      {/* We can't do this because in DOM we can't write transition */}
      {/* {isOpen && <div className="accordion-item__content">{item.text}</div>} */}
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
};

// Down
{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg> */
}

// Up
{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg> */
}
