import styled from '@emotion/styled'

export const Auth = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;

  .login-card {
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 5rem;
    border-radius: 1rem;

    h2 {
      margin: 1rem 0;
    }

    input {
      margin: 0.2rem 0;
    }

    button {
      margin: 1rem 0;
      width: 100%;
    }

    .register-link {
      color: ${({ theme }) => theme.colors.primary[400]};
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.primary[700]};
      }
    }
  }
`

export const Register = styled.div`
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;

  .register-card {
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 5rem;
    border-radius: 1rem;

    h2 {
      margin: 1rem 0;
    }

    input[type='email'] {
      margin: 0.2rem 0 1rem 0;
    }

    input[type='password'] {
      margin: 0.1rem 0;
    }

    .warning-message {
      width: 100%;
      margin-top: 8px;
      margin-bottom: 8px;
      font-size: 12px;
      text-align: left;
      color: ${({ theme }) => theme.colors.warning};
    }

    .ready-to-register {
      color: ${({ theme }) => theme.colors.primary[500]} !important;
    }
    button {
      width: 100%;
    }
  }
`

export const Todo = styled.main`
  width: 100%;
  min-height: calc(100vh - var(--header-height));

  display: flex;

  section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .todo-button {
    position: absolute;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    z-index: 9;

    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary[400]};
    transition: background-color 0.2s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary[600]};
    }
  }

  .todo-button.menu-button {
    bottom: 2rem;
    left: 2rem;
    * {
      color: white !important;
    }
  }

  .todo-button.create-button {
    bottom: 2rem;
    right: 2rem;
  }
`

export const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - var(--header-height));

  flex-direction: column;

  span {
    margin-top: 1rem;
  }
`
