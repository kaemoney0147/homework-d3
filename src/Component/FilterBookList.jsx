import{Form} from 'react-bootstrap'
const FilterBookList=()=>{
    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control type="search" placeholder="Search for books" />
      </Form.Group>
      </Form>
    )
}
export default FilterBookList