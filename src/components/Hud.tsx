type HudProps = {
  xIsNext: boolean;
};

const Hud = ({ xIsNext }: HudProps) => {
  const status = "Now " + (xIsNext ? "X" : "O") + " plays";
  return <h1 className="text-4xl text-center mb-6 sm:mt-[-4rem]">{status}</h1>;
};

export default Hud;
