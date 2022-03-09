import React from "react";

const Gallery = (props) => {
  const gutter = 2;
  return (
    <div
      className={"gallery__container"}
      css={{
        overflow: "hidden",
        marginLeft: -gutter,
        marginRight: -gutter,
      }}
    >
      {props.children}
    </div>
  );
};
export default Gallery;
