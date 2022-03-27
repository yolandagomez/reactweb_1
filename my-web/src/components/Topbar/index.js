import React from 'react';
import  {TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink, TopbarRoute} from './TopbarElements';

const Topbar = ({isOpen, toggle}) => {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <TopbarWrapper>
                <TopbarMenu>
                    <TopbarLink to="about" onClick={toggle}>ABOUT</TopbarLink>
                    <TopbarLink to="education" onClick={toggle}>EDUCATION</TopbarLink>
                    <TopbarLink to="projects" onClick={toggle}>PROJECTS</TopbarLink>
                    <TopbarLink to="contact" onClick={toggle}>CONTACT</TopbarLink>
                </TopbarMenu>
            </TopbarWrapper>
        </TopbarContainer>

    )
}

export default Topbar;