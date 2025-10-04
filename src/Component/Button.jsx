import React from "react";
import "./Button.css";

const Button = ({ textValue, icon, className, textClassName, textValue2, text2ClassName,  }) => {
  return (
    <div>
      <button className={className}>
        <span>{icon}</span>
        <div className="block text-left">
          <p className={textClassName}>{textValue}</p>
          <p className={text2ClassName}>{textValue2}</p>
        </div>
       
      </button>
    </div>
  );
};

export default Button;
