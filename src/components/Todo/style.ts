import styled from '@emotion/styled'

export const AddTodo = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  width: 60%;
  padding: 1.6rem 1.6rem;
  margin: 2rem;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 0 1px rgba(12, 26, 75, 24%), 0 3px 8px -1px rgba(50, 50, 71, 5%);

  input,
  textarea {
    margin-bottom: 0.2rem;
    width: auto;
  }

  input {
    margin-top: 1rem;
  }
  textarea {
    height: 140px;
  }
  button {
    margin-top: 1rem;
  }

  // mobile view
  ${({ theme }) => theme.screen.mobile} {
    width: 100%;
    margin: 1rem;
  }
`

export const Todo = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  width: 60%;
  padding: 1.6rem 1.6rem;
  margin: 2rem;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 0 1px rgba(12, 26, 75, 24%), 0 3px 8px -1px rgba(50, 50, 71, 5%);

  .time-container {
    display: flex;
    flex-direction: column;
    font-size: 12px;

    span {
      color: #555555;
    }
  }

  .todo-item-content {
    hyphens: auto;
    display: flex;
    margin-top: 1rem;
  }

  // mobile view
  ${({ theme }) => theme.screen.mobile} {
    width: 100%;
    margin: 1rem;
  }
`

export const UpdateTodo = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  width: 60%;
  padding: 1.6rem 1.6rem;
  margin: 2rem;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 0 1px rgba(12, 26, 75, 24%), 0 3px 8px -1px rgba(50, 50, 71, 5%);

  input,
  textarea {
    margin-bottom: 0.2rem;
    width: auto;
  }

  input {
    margin-top: 1rem;
  }
  textarea {
    height: 140px;
  }
  button {
    margin-top: 1rem;
  }
  // mobile view
  ${({ theme }) => theme.screen.mobile} {
    width: 100%;
    margin: 1rem;
  }
`

export const TodoList = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .todolist-container {
    position: relative;
    display: flex;
    background-color: white;
    width: 80%;
    max-height: calc(100vh - var(--header-height) - 4rem - 3.2rem);
    overflow: scroll;
    padding: 1.6rem 1.6rem;
    margin: 2rem;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 0 1px rgba(12, 26, 75, 24%),
      0 3px 8px -1px rgba(50, 50, 71, 5%);
  }

  .empty-container {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    h2 {
      margin: 1rem 0;
    }
    span {
      color: #333333;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`

export const TodoItem = styled.div`
  display: flex;
  /* justify-content: space-between;
   */
  align-items: center;
  white-space: nowrap;

  padding: 0.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  .text-wrapper {
    margin-right: 1rem;
    flex-grow: 1;
    overflow: hidden;

    cursor: pointer;
    h4 {
      font-weight: bold;
    }
    span {
      font-size: 12px;
    }
  }

  .button-wrapper {
    display: flex;
    button {
      border: none;
      border-radius: 4px;
      padding: 0.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:first-of-type {
        margin-right: 0.4rem;
      }
    }
  }
`
