interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-screen-xl px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
