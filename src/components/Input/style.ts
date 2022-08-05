import styled from '@emotion/styled'

export const IdInput = styled.input`
  padding: 0.7rem 1rem;
  width: 180px;
  border: 1.4px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 1.4px solid ${({ theme }) => theme.colors.primary[500]};
  }
`

export const PasswordInput = styled.input`
  padding: 0.7rem 1rem;
  width: 180px;
  border: 1.4px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 1.4px solid ${({ theme }) => theme.colors.primary[500]};
  }
`
export const TextArea = styled.textarea`
  padding: 0.7rem 1rem;
  width: 180px;
  border: 1.4px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  outline: none;
  transition: border 0.3s ease-in-out;
  resize: none;

  &:focus {
    border: 1.4px solid ${({ theme }) => theme.colors.primary[500]};
  }
`
