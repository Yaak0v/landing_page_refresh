import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    border-radius: 50px;
    background: #0035fd;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    outline: none;
    border: 2px solid;
    border-color: #0035fd;
    cursor: pointer;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 0 5px 14px -5px #0035fd;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: transparent;
        color: #0035fd;
        border-color: #0035fd; 
        box-shadow: none;
    }
`