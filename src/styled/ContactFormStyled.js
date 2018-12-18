import styled, { keyframes } from 'styled-components';

/*
 * Form Elements
 */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 79vw;
  background-color: ${props => props.theme.alt};
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 87vw;
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontLarge};
  color: ${props => props.theme.primary};
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    padding-left: 0rem;
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSmall};
  color: #212121;
  min-width: 20%;

  @media (max-width: 600px) {
    padding: 0.2rem 0;
  }
`;

export const Input = styled.input`
  border: none;
  outline: 0;
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.1);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: ${props => props.theme.fontSmall};
  transition: all .25s ease-out,transform .1s ease-out;

  &:focus {
    border: 1px solid #ffb619;
    box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.23);
  }

  &::placeholder {
    color: ${props => props.error ? 'red' : 'grey'}
  }
`;

export const FieldContainerMessage = styled(FieldContainer)`
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  outline: 0;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.1);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 8px;
  font-size: ${props => props.theme.fontSmall};
  transition: all .25s ease-out,transform .1s ease-out;
  min-height: 25vh;

  &:focus {
    border: 1px solid #ffb619;
    box-shadow: -1px 1px 16px 0px rgba(0,0,0,0.23);
  }

  &::placeholder {
    color: ${props => props.error ? 'red' : 'grey'}
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  background-color: ${props => props.theme.secondary};
  box-shadow: inset 0 -3px 0 0 #cc8b00;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontExtraSmall};
  font-weight: 700;
  letter-spacing: .01667em;
  border-radius: 999px;
  line-height: 3.28571em;
  min-width: 14em;
  outline: none;
  border: none;
  padding: 0 0.4rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color .25s ease-out,transform .1s ease-out;
  user-select: none;
  word-spacing: .08333em;
  min-height: 3rem;

  &.loading, &:focus, &:active{
    box-shadow: none;
    transform: translateY(3px);
  }

  &:hover {
    background-color: ${props => props.theme.secondaryDark};
  }

  @media (max-width: 600px) {
    align-self: center;
    width: 100%;
  }
`;

export const SuccessMessage = styled.p`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  color: red;
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.primary};
`;

/*
 * Spinner
 */

const colors = keyframes`
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const dash = keyframes`
  0% { stroke-dashoffset: 187; }
  50% {
    stroke-dashoffset: 46.75;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform:rotate(450deg);
  }
`;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;

export const Spinner = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

export const Circle = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite, ${colors} 5.6s ease-in-out infinite;
`;
