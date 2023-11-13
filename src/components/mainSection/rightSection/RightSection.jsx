import data from './../topics'

import { styled } from 'styled-components'

import BackupIcon from '@mui/icons-material/Backup';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StyleDiv = styled.div`

margin-top:30%;
.container {
    position: relative;
    width: 100%;
    padding-top: 1rem;
}
.image{
    width: 100%;
    height: 60px;
    border-radius:5px;
    object-fit: cover;
}
.text_overlay {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: #fff;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: Arial, sans-serif;
  }
.comment{
    border:1px solid gray;
    padding:1rem;
    border-radius:10px;
}
.comment_title{
    font-weight:500;
    font-size:.9rem;
    color:gray
}
.comment_form{
    margin-bottom:1rem;
}
.input{
    margin-top:1rem;
    width:100%;
    border:none;
    border-bottom: 2px solid gray   ;
    height:35px;
}
.btn{
    margin-top:.8rem;
    background:yellowgreen;
    color:#fff;
    font-weight:600;
    width:35%;
    height:38px;
}

.socialSite_heading{
    font-weight:700;
    margin-bottom:2rem;
}
  .socialIcon{
    padding:.5rem;
    color:#fff;
  }
  .facebook{
    background:#1877F2 ;
  }
  .instagram {
    background-color: #E4405F;
  }
  
  .youtube {
    background-color: #FF0000;
  }
  
  .telegram {
    background-color: #0088cc;
  }
  
  .whatsapp {
    background-color: #25D366;
  }
  
  .twitter {
    background-color: #1DA1F2;
  }
  
  `

const RightSection = () => {
    return (
        <>
            <StyleDiv>
                <div className='topics'>
                    {
                        data.map((value, index) => {
                            return (

                                <div className='container' key={index}>
                                    <img src={value.src}
                                        alt="topics"
                                        className='image' />
                                    <p className='text_overlay'>{value.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <br />
                <hr />
                <br />
                <div className='comment'>
                    <h5 className='comment_title'>Subscribe To Join Our Community for awesome blogs and receive daily Updates</h5>
                    <form className='comment_form'>
                        <input className='input' placeholder='comment Here' ctype='email'></input><br />
                        <button className='btn' onClick=''><BackupIcon /> submit</button>
                    </form>
                </div>
                <br /><hr /><br />
                <div className='socialSite'>
                    <h4 className='socialSite_heading'>KEEP UP WITH OUR BLOGS</h4>
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
            </StyleDiv>
        </>
    )
}
export default RightSection