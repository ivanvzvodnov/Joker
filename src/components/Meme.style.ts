import styled from 'styled-components'

export const Container = styled.div`
background-color: #1e990e;
width: 80vw;
height: 80vh;
text-align: center;
border-radius: 30px;
border: 2px solid #fff;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
word-wrap:\ break-word;
`

export const Joke = styled.div`
font-size: 42px;
margin-top: 150px;
@media(max-width:800px){
    margin-top: 50px;
};
@media(max-width:400px){
    font-size:32px;
}
`

export const Button = styled.div`
width: 30vw;
height: 50px;
background-color: #99170e;
border-radius: 20px;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
left: 50%;
bottom: 20%;
transform: translate(-50%, 0);
font-size: 25px;
border: 2px solid #fff;
&:hover{
  cursor: pointer;
  background-color: #b50c05;
  box-shadow: 10px 5px 5px black;
  transition: .3s linear;
}
@media (max-width: 800px) {
    bottom: 10%;
}
`