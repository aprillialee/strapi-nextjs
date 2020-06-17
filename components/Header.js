import styled from "@emotion/styled";
import { rem } from "polished";

function Header() {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">
          <img src="/images/vinyl.png" alt="Sites Logo" />
          <span className="logo-text">Album Review</span>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: #efefef;

  .logo {
    display: flex;
    align-items: center;
    width: ${rem(30)};

    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: ${rem(20)};
      white-space: nowrap;
    }
  }
`;

export default Header;
