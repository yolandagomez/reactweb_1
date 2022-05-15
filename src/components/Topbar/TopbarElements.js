import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
// X symbol closing:
import {FaTimes} from 'react-icons/fa';

export const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #449dd1;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity:${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    border: 4px dotted green;
`;
export const CloseIcon = styled(FaTimes)`
    color: #BFD9E7;
    font-size: 2rem;
    &:hover {
        color: #192bc2;
        transition: 0.2s ease-in-out;
    }
`;
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;
export const TopbarWrapper = styled.div`
    color: #fff;
`;
export const TopbarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6; 80px);
    text-align-center;

    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(4, 100px);
    }
`
export const TopbarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration; none;
    color: #bfd9e7;
    cursor: pointer;

    &:hover {
        color: #192bc2;
        transition: 0.2s ease-in-out;
    }
`
// what is topbar Route?
export const TopbarRoute = styled(LinkR)`
    border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 16px 64px;
    color: peru;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: red;
    }

`