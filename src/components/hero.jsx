import PropTypes from 'prop-types';

const Hero = (props) => {
    return (
        <>
            <p>{props.activeText}</p>
        </>
    )
}

Hero.propTypes = {
    activeText: PropTypes.string
}


export default Hero;