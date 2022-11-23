import  {Badge} from "react-bootstrap"
const MyBadge=(propos)=>{
    return(
        <h1>
        <Badge variant={propos.color}>
            {propos.badge}
            </Badge>
            </h1>
           
            )
    }
    


export default MyBadge