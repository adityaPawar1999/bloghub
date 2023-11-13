import LeftSection from "./leftSection/LeftSection"
import RightSection from "./rightSection/RightSection"

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