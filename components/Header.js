import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";

import Link from "next/link";

import Navigation from "components/Navigation";

function Header({ navigation }) {
  return (
    <HeaderStyled>
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center" padding={10}>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/vinyl.png" alt="Sites Logo" />
                <span className="logo-text">Album Review</span>
              </a>
            </Link>
          </div>
          <Navigation navigation={navigation} />
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: #efefef;
  height: 50px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      width: ${rem(30)};
    }

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
