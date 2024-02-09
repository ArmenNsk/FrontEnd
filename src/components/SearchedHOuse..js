import { useParams } from "react-router-dom";
import House from "./House";


const SearchedHouse = (props) => {
    //get the id from params in location bar
    let param = useParams();
    
    // compare it with the props allhouses and get the house. find
    let obj = props.allhouses.find((house) => { return param.id == house._id});
    
    // let houseId = paramsObj.id;




    return (
        <div>
        <h1> Searched House !</h1>
        <House houseInfo={obj} showEnquiry={true}/>
        </div>
     );
}
 
export default SearchedHouse;
