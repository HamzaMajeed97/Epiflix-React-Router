import { Row, Col } from "react-bootstrap";

const CustomFooter = () => {
  return (
   

    <Row>
      <Col
        className="text-center py-3"
        style={{ backgroundColor: "black", color: "white" }}
        >
        Copyright &copy; Epiflix
      </Col>
    </Row>
        
  );
  }

export default CustomFooter