import styled from '@emotion/styled'

export const PrimaryButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1.4px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary[400]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`
export const SecondaryButton = styled.button`
  cursor: default;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
  border: 1.4px solid ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  outline: none;
`
