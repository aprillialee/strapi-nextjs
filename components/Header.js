import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";

import Link from "next/link";

import Navigation from "components/Navigation";

function Header() {
  return (
    <HeaderStyled>
      <Box variant="container">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          padding={100}
          paddingTop={60}
        >
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/images/vinyl.png" alt="Sites Logo" />
              </a>
            </Link>
          </div>
          <Navigation />
        </Flex>
      </Box>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  background: #2c3944;
  height: 80px;

  .logo {
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      width: ${rem(30)};
    }
  }
`;

export default Header;
