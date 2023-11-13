import styled from "styled-components";

import SmartToyIcon from '@mui/icons-material/SmartToy';



import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterStyle = styled.div`
.footer{
    background:#1e1e1e;
    color:#fff;
    display:flex;
    justify-content:center;
    align-item:center;
    padding-bottom:3rem;

    margin: 0;
    padding: 0;
    max-height: 100vh;
    flex-direction: column;
}
.row1{
    padding:3rem 0 2rem 0; 
}
.bloglogo{
padding-top:3rem;
}
.description{

padding-top:3rem;
    padding-bottom:1rem;
    font-size:.8rem;
}

.title{
    font-size:1rem;
    font-weight:600
}
p{
    font-size:.8rem;
}
`

const Footer = () => {
    return (
        <>
            <FooterStyle>
                <div className="footer">
                    <div className="container">
                        <div className="row1 row">
                            <div className="blogLogo col-lg-3 ">
                                <h4><SmartToyIcon /> UpdateDAILY</h4>
                            </div>
                            <div className="description col-lg-9">
                                <p>Explore a world of inspiration and knowledge through our dynamic blog. Uncover captivating stories, expert insights, and practical tips spanning diverse topics. Immerse yourself in a rich tapestry of content that informs, entertains, and enriches your daily life.</p>
                            </div>

                        </div>

                        <div className="row2 row">
                            <div className="title col-lg-4">
                                <p className="title">RECENT POSTS :</p>
                                <hr />
                                <p>How to grow Your Business in 2023</p>
                                <p>Best way to earn money online</p>
                                <p>Top exercise to gain weight</p>
                            </div>
                            <div className="navlinks col-lg-4">
                                <p className="title">NAVIGATION :</p>
                                <hr />
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>
                                        <p className='socialIcon facebook'>Home</p>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon instagram'>Post</p>
                                    </div>
                                </div>
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>
                                        <p className='socialIcon facebook'>Create</p>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon instagram'>Login</p>
                                    </div>
                                </div>


                            </div>
                            <div className="updates col-lg-4">
                                <p className="title">GET REGULAR UPDATES</p>
                                <hr />
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>
                                        <p className='socialIcon facebook'><FacebookIcon /> <span> facebook</span></p>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon instagram'><InstagramIcon /> <span> Instargram</span></p>
                                    </div>
                                </div>
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon youtube'><YouTubeIcon /><span>Youtube</span></p>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon telegram'><TelegramIcon /><span>Telegram</span></p>
                                    </div>
                                </div>
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>
                                        <p className='socialIcon whatsapp'><WhatsAppIcon /><span>Whatsapp</span></p>
                                    </div>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>

                                        <p className='socialIcon twitter'><TwitterIcon /><span>Twitter</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </FooterStyle>

        </>
    )
}
export default Footer;
