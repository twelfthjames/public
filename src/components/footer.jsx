import styled from 'styled-components';

const FooterStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2em;
`

const FooterNav = styled.div`
    list-style: none;
`

const Copyright = styled.p`
    font-size: 0.8em;
    text-align: center;
    letter-spacing: 0.05em;
`

const getYear = () => {
    const year = new Date();
    return year.getFullYear();
}

const Footer = () => {
    const year = new Date();
    console.log(year.getFullYear());
    return (
        <> 
            <FooterStyles>
                {/* <FooterNav>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </FooterNav> */}
                <Copyright>
                    <p>&copy; {getYear()} Twelfth &amp; James Media Group, LLC</p>
                    <p>Privacy Policy &#124; Cookie Policy</p>
                </Copyright>
            </FooterStyles>
        </>
    )
}

export default Footer;