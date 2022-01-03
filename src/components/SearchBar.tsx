import React from 'react';
import styled from 'styled-components';


const SearchBar = () => {

    const Container = styled.div`
        
    @media (min-width:520px) {
        display:flex;
        flex-flow: row nowrap;
        justify-content:space-evenly;
        align-items:center;
        width:90%;
        padding: 1vh 0;
        margin:2vh 0 2vh 0 ;
        border:1px solid red;
      }

    `;

    const Search = styled.input`
        
    @media (min-width:520px) {
        display:flex;
        flex-flow: row nowrap;
        justify-content:space-evenly;
        align-items:center;
        width:80%;
        padding: 1vh 0;
      }

    `;
    return(
        <Container>

            
                <Search placeholder="Search for a country"></Search>
            
           
        </Container>
    )
}


export default SearchBar