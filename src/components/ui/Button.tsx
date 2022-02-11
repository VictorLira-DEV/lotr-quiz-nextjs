import StyledButton from "../styles/Button.styled";

interface IButton {
  children: any;
  onClick?: (e: any) => void;
  className?: string;
}

function Button(props: IButton) {
  const { children, onClick, className } = props;

  const click = function (e: any) {
    if (!onClick) {
      return;
    }
    onClick(e);
  };

  return (
    <StyledButton className={className} onClick={(e) => click(e)}>
      {children}
    </StyledButton>
  );
}

export default Button;
