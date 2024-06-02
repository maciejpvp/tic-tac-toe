import React from "react";

type BoardRowProps = {
    children: React.ReactNode;
}

const BoardRow: React.FC<BoardRowProps> = ({ children }) => {
  return <div className="flex flex-row">{children}</div>;
};

export default BoardRow;