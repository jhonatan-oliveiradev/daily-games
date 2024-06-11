interface LabelProps {
  name: string;
}

const Label = ({ name }: LabelProps) => {
  return (
    <div className="flex-grow rounded-lg bg-muted-foreground/10 px-3 py-1 text-center text-muted-foreground transition-all hover:text-primary sm:flex-grow-0">
      <span className="pointer-events-none">{name}</span>
    </div>
  );
};

export default Label;
