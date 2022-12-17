import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "Testimonials", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          >
            <span className="hidden">a</span>
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
