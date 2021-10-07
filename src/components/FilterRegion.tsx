import React from 'react';
import styled from 'styled-components';

const FilterRegion = () => {

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
            <p>FilterRegion</p>
        </Container>
    )
}

export default FilterRegion