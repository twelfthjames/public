import PropTypes from 'prop-types';

import Hero from './hero';

const Home = () => {
    return (
        <>
            <Hero activeText={activeText[0]} />
        </>
    )
}

const activeText = [
    'creative',
    'production',
    'development',
    'business'
]

Home.propTypes = {
    activeText: PropTypes.string
}

export default Home;