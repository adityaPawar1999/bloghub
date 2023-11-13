import LeftSection from "./leftSection/LeftSection"
import RightSection from "./rightSection/RightSection"

import  { styled } from 'styled-components'

const StyleDiv = styled.div`
bg{
    background:red;
}
`

const MainSection=()=>{
    return(
        <>
        <div className= " row">
            
        <div className="col-lg-8 col-md-8 col-sm-12">
            <LeftSection/>
            

            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 bg">
            <RightSection/>
            </div>
          
        </div> 
            
        </>
    )
}
export default MainSection