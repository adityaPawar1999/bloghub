
import { Link } from 'react-router-dom'
import style from './navbar1.module.css'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Navbar1() {
    return (
        <div classname='container'>
            <div className={style.main}>
                <div className={`${style.navbar1} container row g-0`}>
                    <div className={`${style.socialSite} col-lg-8 col-md-4 col-sm-4  `}>
                        <FacebookRoundedIcon/>
                        <InstagramIcon/>
                        <YouTubeIcon/>
                        <TwitterIcon/>
                    </div>
                    <div className={`${style.link} col-lg-3 col-md-8 col-sm-8 `}>
                        <Link  className={style.link1} to='/'>Contact</Link>
                        <Link className={style.link1} to='/'>AboutUs</Link>
                        <Link  className={style.link1} to='/'>Login</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
