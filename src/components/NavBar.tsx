import React from 'react';
import styled from 'styled-components';

const NavBar = () =>{

    const Container = styled.div`


        @media (min-width:520px) {
            display:flex;
            flex-flow: row nowrap;
            justify-content:space-between;
            align-items:center;
            width:90%;
            padding: 2vh 0;
            border:1px solid red;
          }
    `;

    return(
        <Container>
            <div>
                <h1>Where in the world?</h1>
            </div>
            <div>
                <p>Dark Mode</p>
            </div>
        </Container>
    )
}

export default NavBar