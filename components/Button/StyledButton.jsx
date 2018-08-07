import styled from 'styled-components';

const StyledButton = styled.button`
  height: ${props => (props.big ? '42px' : '32px')};
  padding: ${props => (props.big ? '0 28px' : '0 14px')};
  border-radius: ${props => (props.big ? '21px' : '16px')};
  background: ${props => (props.outline ? 'transparent' : '#d0d0d0')};
  border: 1px solid #d0d0d0;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: ${props => (props.big ? '42px' : '32px')};
  cursor: pointer;

  &:hover {
    color: rgba(0, 0, 0, 0.84);
    background: ${props => (props.outline ? 'transparent' : '#bbbbbb')};
    border-color: #bbbbbb;
  }
`;

export default StyledButton;
