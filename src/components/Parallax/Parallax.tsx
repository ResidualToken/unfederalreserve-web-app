import React, { useEffect } from 'react'
import styled from 'styled-components'
import bitcoinOne from '../../assets/img/bitcoin-1.svg'
import bitcoinTwo from '../../assets/img/bitcoin-2.svg'
import bitcoinTree from '../../assets/img/bitcoin-3.svg'

interface ParallaxProps {
  path?: string
  id?: string
  depth?: number
}

const Parallax: React.FC<ParallaxProps> = ({ path, id, depth }) => {

  useEffect(() => {
    const Parallax = require('parallax-js');
    var scene = document.getElementById(id);
    var parallaxInstance = new Parallax(scene);
  })

  return (
    <StyledParallax>
      <div id={id} data-relative-input="true">
        <img src={path} data-depth={depth} width="100%" className="image-class"/>
      </div>
    </StyledParallax>
  )
}
const StyledParallax = styled.div`
@media (max-width: 757px) {
  display: none;
}
`
export default Parallax
