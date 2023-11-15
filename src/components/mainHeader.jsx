import { Navbar,Form,Row,Col } from "react-bootstrap";


function MainHeader({setFind}) {
  return (
    <Navbar className="justify-content-between">
      <h1 className="text-4xl	">
        Recipes
      </h1>
      <Form >
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e)=>setFind(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
    </ Navbar>
  )
}

export default MainHeader
