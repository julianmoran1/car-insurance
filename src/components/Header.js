import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
background-color: #26C6DA;
padding: 10px;
font-weight: bold;
color: #FFFFFF;
`;

const HeaderText = styled.h1`
font-size: 2rem;
margin: 0;
font-family: "Slabo 27px", serif;
text-align: center;
`; 

export default function Header({title}) {
    return (
        <HeaderContainer>
            <HeaderText>{title}</HeaderText>
        </HeaderContainer>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
