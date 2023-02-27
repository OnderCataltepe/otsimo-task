interface IBProps {
  onClick: () => void;
  children: JSX.Element;
}

const IconButton = ({ children, onClick }: IBProps): JSX.Element => {
  return (
    <button className="text-2xl" onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
