import React from "react";
import Tokenize from "../../util/JSON-parser/Tokenizing/Tokenize";

function Test() {
  const onChangeHandler = (event: any) => {
    console.log(event.target.value);
    console.log(Tokenize(event.target.value));
  };
  return (
    <div>
      <textarea onChange={onChangeHandler} />
    </div>
  );
}

export default Test;
