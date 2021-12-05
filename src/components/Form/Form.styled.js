import styled from '@emotion/styled/macro';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  margin: 0 auto;

  border: 1px solid var(--bs-gray-600);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 10px;

  background-color: var(--bs-cyan);
  color: var(--bs-light);

  box-shadow: 0 3px var(--bs-info);
  border-radius: 5px;

  &:hover {
    background-color: var(--bs-info);
    box-shadow: 0 3px var(--bs-cyan);
  }

  &:active {
    margin-top: 2px;
    margin-bottom: -2px;
    background-color: var(--bs-cyan);
    box-shadow: 0 -2px 0 0 var(--bs-info);
  }
`;
