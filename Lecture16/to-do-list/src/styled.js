import {styled, createGlobalStyle} from "styled-components";


const randomColors = ['#00008b', '#ffd700', '#008000', '#ff0090']

export const GlobalStyle = createGlobalStyle`
  body {
    background-color:  #d3d3d3;
  }
`;

export const TaskContainer = styled.div`
margin-top: 20px;
width: 100%;
height: 500px;
background-color: white;
border: 1px solid #ccc; 
padding: 20px;
margin: 5px;
border-radius: 2%;
`;

export const MainContainer = styled.div`
display: flex;
margin: 10px;

`

export const SpanEl = styled.span`
color: #ccc;`

export const TaskTitle = styled.div`
margin-bottom: 20px;
`
export const Hr = styled.hr`
height: 1px;
`

export const Button = styled.button`
background-color: transparent;
border: none;
outline: none;
font-size: 30px;
color: #bfc1c2;`

export const Task = styled.div`
padding-left: 5px;
border-left: 5px solid ${props => randomColors[props.index % randomColors.length]};
border-top: 2px solid ${props => randomColors[props.index % randomColors.length]};
border-right: 2px solid ${props => randomColors[props.index % randomColors.length]};
border-bottom: 2px solid ${props => randomColors[props.index % randomColors.length]};
border-radius: 4%;
margin-top: 20px;
box-shadow: inset 5px 1px 1px rgba(0, 0, 0, 0.2);

`