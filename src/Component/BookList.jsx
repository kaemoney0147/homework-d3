import {Container,Row,Col} from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList=({books})=>{
    return(
        <Container>
            <Row>
                {books.map((book)=>(
                    <Col lg={3} key={book.asin}>
                        <SingleBook book={book}/>
                        </Col>
                      
                ))}
            
            </Row>
        </Container>
        
    )
}
export default BookList