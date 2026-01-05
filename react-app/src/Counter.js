import React, { memo} from "react";

const Counter = () => {

  let counter = 0;
  for(let i = 0; i < 1000000000; i++) {
    counter = counter + 1;
  }
    return <div>Child Copmonent{counter}</div>;
};

export default memo(Counter);
