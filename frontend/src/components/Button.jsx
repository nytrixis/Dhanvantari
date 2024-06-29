import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `relative inline-flex items-center justify-center h-11 transition-all duration-300 ease-in-out ${
    px || "px-7"
  } ${className || ""} bg-white text-black rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
