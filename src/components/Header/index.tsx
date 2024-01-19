import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImage from "../../assets/dt-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
