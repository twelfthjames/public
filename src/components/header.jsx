import styled from 'styled-components';

const HeaderWrapper = styled.div `
    padding: 1em 2em;
`;

const HeaderLogo = styled.div `
    width: 120px;
`;

const Header = () => {
    return(
        <header className='header'>
            <HeaderWrapper>
                <HeaderLogo>
                    <img src="./assets/img/tj-circle-lte.svg" alt="" />
                </HeaderLogo>
            </HeaderWrapper>
        </header>
    )
}

export default Header;