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
        border:1px solid red;
      }

    `;
    return(
        <Container>
            <div>
                 <p>Searchicon</p>
            </div>
            <div>
                <input placeholder="Search for a country"></input>
            </div>
           
        </Container>
    )
}


export default SearchBar