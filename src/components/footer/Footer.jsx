import styled from "styled-components";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from "react-router-dom";

const FooterStyle = styled.div`
.footer{
    background:#1e1e1e;
    color:#fff;
    display:flex;
    justify-content:center;
    align-item:center;
}
.description{
    font-size:.8rem;
}
.title{
    font-size:1rem;
    font-weight:600
}
.navLink{
    text-decoration:none;
    color:#fff;
    font-weight:700;
}
.active{
    color:yellowgreen;
}
.navLink:hover{
    color:yellowgreen;
}
.updates{
    padding-bottom:1rem;
}
.socialIcon{
    cursor:pointer;
}
.socialIcon:hover{
    color:yellowgreen;
}
`

const Footer = () => {
    return (
        <>
            <FooterStyle>
                <div className="footer">
                    <div className="container">
                        <div className="row1 row">     
                            <br/><br/>
                            <div className="description col-lg-9">
                                <br/><br/>
                                <p>Explore a world of inspiration and knowledge through our dynamic blog. Uncover captivating stories, expert insights, and practical tips spanning diverse topics. Immerse yourself in a rich tapestry of content that informs, entertains, and enriches your daily life.</p>
                            </div>            
                            <hr/>
                        </div>
                        <div className="row2 row">
                            <div className="title col-lg-4">
                            <br/><br/>
                                <p className="title">RECENT POSTS :</p>
                                <p className="socialIcon">How to grow Your Business in 2023</p>
                                <p  className="socialIcon">Best way to earn money online</p>
                                <p  className="socialIcon">Top exercise to gain weight</p>
                            </div>                            
                            <div className="navlinks col-lg-4">                            
                            <br/><br/>
                                <p className="title">NAVIGATION :</p>
                                <div className='row g-1'>
                                    <div className='col-lg-6 col-md-12 col-sm-6'>                                    
                            <NavLink className="navLink" to='/'>Home</NavLink><br/>
                            <NavLink className="navLink" to='/posts'>Posts</NavLink><br/>
                            <NavLink className="navLink" to='/login'>Login</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="updates col-lg-4">                            
                            <br/><br/>
                                <p className="title">GET REGULAR UPDATES</p>
                                <div className=' row g-1'>
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
            </FooterStyle
        </>
    )
}
export default Footer;
