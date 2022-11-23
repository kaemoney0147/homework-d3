import {Card,Button} from "react-bootstrap"

const SingleBook=({book})=>{
    return(
    
        <Card >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Buy Now${book.price}</Button>
      </Card.Body>
    </Card>

    )
}
export default SingleBook