import React from "react";

const ThingHolder = function (props) {
  //   console.log(this);
  let self = this;
  return (
    <div className="thing-holder">
      {props.componentDescriber.call(self, props)}
    </div>
  );
};

export default ThingHolder;
