import data from './../database'
import  { styled } from 'styled-components'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const StyleDiv = styled.div`
.heading{
    font-weight:600;
    color:yellowgreen;
}
.heading span{
    color:#212121;
    font-weight:500;
    font-size:.8rem;
}
.cardStyle{
    border-radius:0;
}
.cardStyle:hover{
    filter: brightness(80%); 
    transition:  0.3s ease-in-out;
}
.image{
    object-fit:cover;
}
.title{
    color:yellowgreen;
    font-size:1.2rem;
}
.description{
    font-size:.8rem;
    color:gray;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.readMore{
    padding:5px 15px;
    color:white;
    width:140px;
    border-radius:20px;
    background-color:yellowgreen;
}
`

const LeftSection = () => {
    console.log(data)
    return (
        <>
        <StyleDiv>
            <div className="section mt-5 ">
                <p className='heading'><HourglassTopIcon/> Today's Top HighLights<br>
                </br>
                    <span>Explore the dynamic world of fashion, where style meets innovation. From runway glamour to street chic, discover your unique fashion statement.Venture into the heart of travel, </span>
                </p>
        <hr/>
                <div class="card-group ">
                    {data.map((value, index) => (
                        <div class="col-lg-6 " key={index}>
                            <div class="card cardStyle">
                                <img src={value.src}
                                    className="card-img-top image"
                                    alt="..."
                                    height={240}
                                />
                                <div class="card-body ">
                                    <h5 class="card-title title">{value.title}</h5>
                                    <p class="card-text description">{value.description}</p>
                                    <p className='readMore'>Read More <ArrowCircleRightIcon/></p>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    
                </div>

            </div>
            </StyleDiv>
        </>
    )
}
export default LeftSection