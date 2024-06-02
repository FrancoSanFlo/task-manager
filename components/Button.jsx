const Button = ({ children, text, className, onButtonClick }) => {
  return (
    <button className={className} onClick={onButtonClick}>
      {text || children}
    </button>
  );
};

export default Button;
