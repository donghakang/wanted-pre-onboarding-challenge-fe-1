import styled from "@emotion/styled";

export const Header = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      margin: 0 0.4rem;
      padding: 0;
    }
  }
`;
