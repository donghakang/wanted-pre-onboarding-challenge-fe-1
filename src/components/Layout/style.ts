import styled from '@emotion/styled'

export const Header = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary[700]};
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;

  * {
    transition: color 0.2s ease-in-out;
    white-space: nowrap;
  }

  .logo {
    a {
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
      font-family: 'Open Sans', Arial, sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.15em;

      &:hover {
        color: ${({ theme }) => theme.colors.primary[500]};
      }
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      margin: 0 0.4rem;
      padding: 0;

      a,
      div {
        cursor: pointer;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          color: ${({ theme }) => theme.colors.primary[500]};
        }
      }
    }
  }

  .active {
    * {
      color: ${({ theme }) => theme.colors.primary[500]} !important;
    }
  }
`
