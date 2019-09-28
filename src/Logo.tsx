import React from 'react'
import styled from 'styled-components'
import LogoImg from './nnp2smallTrans.png'

export const Logo: React.FC = () => (
  <LogoContainer>
    <Image alt="logo" src={LogoImg} />
  </LogoContainer>
)

const LogoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`

const Image = styled.img`
  width: 10%;
`
