type BoardRowProps = {
  children: React.ReactNode;
};

const BoardRow = ({ children }: BoardRowProps) => {
  return <div className="flex flex-row">{children}</div>;
};

export default BoardRow;
