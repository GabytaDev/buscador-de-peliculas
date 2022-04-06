
import "../styles/_ErrorPage.scss"
import page404 from "../images/page404.png";

const ErrorPage = ()=>{

 return (
     <div className="content-img">
       <img src={page404} className="error-page"></img> 
     </div>
 )
}

export default ErrorPage;