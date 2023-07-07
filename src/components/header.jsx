import styled from 'styled-components';

const HeaderWrapper = styled.div `
    padding: 1em 2em;
`;

const Header = () => {
    return(
        <div className='header'>
            <HeaderWrapper>
                <h2>header</h2>
            </HeaderWrapper>
        </div>
    )
}

export default Header;