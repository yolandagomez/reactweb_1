import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2 } from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            {/* No funciona el video */}
        </HeroBg>
        {/* <HeroContent>
            <HeroH1>Yolanda Gómez</HeroH1>
            <HeroH2>yvgomez@hotmail.com / (+34) 600667730</HeroH2>
            <HeroP>I'm a web programmer.</HeroP>
             <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                </SocialIconLink>
            </SocialIcons> 
        </HeroContent> */}
    </HeroContainer>
  )
}

export default HeroSection;