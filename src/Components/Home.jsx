import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import pizza from '../assets/pizza.jpg';
import LoginButtton from '../Components/LoginButton';
import LogoutButton from '../Components/LogoutButton';




const Styles = styled.div`
.home-1 {
    border: 3px solid black;
    background-color: white;
    font-family: 'Padauk', sans-serif;
    height: 280px;
    bottom-border: 2px solid black;
}
.home-2 {
    background-color: yellow;
    font-family: 'Padauk', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pizza-text {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 75px;
   
}
 .menu {
    position:absolute; 
    top:0px; 
    margin:5px; 
 }

 .login {
    display: flex;
    justify-content: center;
    align-items: center;
   font-size: 28px;
 }
 .logout {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 75px;
 }
 .contact {
    position:absolute; 
    top:20px; 
    margin:5px; 
 }
// .pizzaImg {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
`;

   
  
    
  

export const Home = () => (
   
    <Styles>
        <Container className='home-1'>
       
                <h2 className="pizza-text">Pizza 42!!!</h2>
                <h4 className='menu'>Menu</h4>
                <h4 className='contact'>Contact</h4>

                <LoginButtton className='login' />
                <LogoutButton className='logout' />
      
      
        <div className="home-2">
            <img className='pizzaImg'src={pizza} alt="pizza img" />
        </div>
        </Container>
     </Styles>
)


export default Home;