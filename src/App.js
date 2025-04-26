import { Card, Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Name from "./Components/Name"
import Price from "./Components/Description"
import Description from "./Components/Price"
import ProductImage from "./Components/Image"


const firstName = "Timité" 

const App = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="product-card">
            <ProductImage />
            <Card.Body>
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>

          <div className="greeting-section mt-4 text-center">
            {firstName ? (
              <>
                <h3>Bonjour, {firstName}!</h3>
                <img src="https://tinyurl.com/2ckf29up" alt="Greeting" className="greeting-image mt-2" />
              </>
            ) : (
              <h3>Bonjour !</h3>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
