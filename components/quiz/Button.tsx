import StyledButton from "../styles/Button.styled";

interface IButton {
  children: any;
  onClick?: () => void;
  textTransform?: string;
}

function Button(props: IButton) {
  const { children, onClick } = props;

  const click = function () {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return <StyledButton onClick={() => click()}>{children}</StyledButton>;
}

export default Button;
