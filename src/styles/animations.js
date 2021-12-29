import { css, keyframes } from 'styled-components'


export const exposeTop = ({ time = '0.5s', type='ease' }) =>
 css`animation: ${time} ${exposeTopKeyframe} ${type}}`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => 
    css`animation: ${time} ${fadeInKeyframes} ${type};`

export const exposeTopKeyframe = keyframes`
    from{
        top: -60px;
        opacity: 0.7;
    }
    to {
        top: -20px;
        opacity: 1;
    }
`

export const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`