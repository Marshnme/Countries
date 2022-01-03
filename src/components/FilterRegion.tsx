import React from 'react';
import styled from 'styled-components';

// interface props{
//     text:string;
// }

const FilterRegion = () => {

    const Container = styled.div`
        
    @media (min-width:520px) {
        display:flex;
        flex-flow: row nowrap;
        justify-content:space-evenly;
        width:50%;
        height:5vh;
        padding: 1vh 0;
        border:1px solid red;
        margin: 2vh 0 2vh 0;
      }

    `;

    const Choices = styled.select`
    @media (min-width:520px) {
        width:80%;
      }

    `;

    return(
        <Container>
            <Choices placeholder="Filter by Region" name="regions" id="regions">
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </Choices>
        </Container>
    )
}

export default FilterRegion