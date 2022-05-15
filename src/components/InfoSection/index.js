import React from 'react'
import { Button } from 'react-scroll/modules'
import { Column2, ImgWrap } from './InfoElements'

import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img } from './InfoElements'
const InfoSection = () => {
  return (
    <>
    <InfoContainer id = { id } >
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>TopLine</TopLine>
                        <Heading>Heading</Heading>
                        <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to='home' />
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    
    </>
  )
}

export default InfoSection