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
            <label htmlFor="regions">Choose a region:</label>

            <select name="regions" id="regions">
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </select>
        </Container>
    )
}

export default FilterRegion