import { Alert } from "react-bootstrap"

const WarningSign=(propos)=>{
    return (
      <Alert variant="warning">
      {propos.warning}
      </Alert>
    )
}
export default WarningSign