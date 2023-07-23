import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeroContainer = styled.div `
    background: #fff;
    margin: 0 4em;
    padding: 1em;
    min-height: 400px;
    display: flex;
    align-items: center;
`

const HeroText =  styled.h2 `
    font-size: 2em;
    color: #333;
    text-transform: lowercase;
`

const Hero = (props) => {
    return (
        <>
            <HeroContainer>
                <HeroText>
                    <h2>Your {props.activeText} Partners.</h2>
                </HeroText>
            </HeroContainer>
        </>
    )
}

Hero.propTypes = {
    activeText: PropTypes.string
}


export default Hero;