type HudProps = {
  xIsNext: boolean;
};

const Hud = ({ xIsNext }: HudProps) => {
  const status = "Now " + (xIsNext ? "X" : "O") + " plays";
  return <div className="text-4xl text-center mb-6 mt-[-4rem]">{status}</div>;
};

export default Hud;
