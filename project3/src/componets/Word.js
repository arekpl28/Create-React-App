import React from "react";

const Word = props => {
  return (
    <>
      <li>
        Word in English <em>{props.en}</em> - word in Polish <em>{props.pl}</em>
      </li>
    </>
  );
};

export default Word;
