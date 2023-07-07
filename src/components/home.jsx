import PropTypes from 'prop-types';

import Hero from './hero';

const Home = () => {
    return (
        <>
            <Hero activeText="this is the active text." />
        </>
    )
}

Home.propTypes = {
    activeText: PropTypes.string
}

export default Home;