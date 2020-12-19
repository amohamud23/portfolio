import React from "react";
import "./../css/Section5.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Patcher from "../assets/patcher.png";
import Lidar from "../assets/lidar.png";
import LidarCar from "../assets/LidarCar.png";
import HoverImage from "../Components/HoverImage";
import PatcherDispatcher from "../assets/Patcher_Dispatcher.jpg";
import PatcherMap from "../assets/Patcher_Map.jpg";

class Projects extends React.Component {
  render() {
    return (
      <Container className="section05" fluid>
        <h1 className="section05-title">Projects</h1>
        <Row className="section05-row-project">
          <Col className="section05-project-col" lg={5}>
            <h2 className="section05-col1-title">Patcher</h2>
          </Col>
          <Col>
            <Row>
              <Col className="section05-project-col" lg={true}>
                {/* <Image
                  className="section05-project-img patcherImg"
                  src={Patcher}
                /> */}
                <HoverImage
                  className="section05-project-img patcherImg"
                  image={Patcher}
                  description="Project Logo"
                />
              </Col>
              <Col className="section05-project-col" lg={true}>
                {/* <Image
                  className="section05-project-img patcherImg"
                  src={PatcherDispatcher}
                /> */}
                <HoverImage
                  className="section05-project-img patcherImg"
                  image={PatcherDispatcher}
                  description="Home Page for Dispatchers"
                />
              </Col>
              <Col className="section05-project-col" lg={true}>
                {/* <Image
                  className="section05-project-img patcherImg"
                  src={PatcherMap}
                /> */}
                <HoverImage
                  className="section05-project-img patcherImg"
                  image={PatcherMap}
                  description="Page for Live Driver Location"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="section05-row-project">
          <Col className="section05-project-col" lg={5}>
            <h2 className="section05-col1-title">Lidar Mapping</h2>
          </Col>
          <Col lg={true}>
            <Row>
              <Col
                className="section05-project-col"
                style={{ paddingTop: "10%" }}
                lg={true}
              >
                {/* <img
                  style={{ width: "100%" }}
                  className="section05-project-img"
                  src="https://media.giphy.com/media/dayFn9op3J2lLw59yq/giphy.gif"
                /> */}
                <HoverImage
                  className="section05-project-img patcherImg"
                  image="https://media.giphy.com/media/dayFn9op3J2lLw59yq/giphy.gif"
                  description="Mapping Live Lidar Data"
                />
              </Col>
              <Col
                className="section05-project-col"
                style={{ paddingTop: "10%" }}
                lg={true}
              >
                <HoverImage image={Lidar} description="Lidar Data" />
              </Col>
              <Col
                className="section05-project-col"
                style={{ paddingTop: "10%" }}
                lg={true}
              >
                {/* <Image
                  style={{
                    width: "100%",
                  }}
                  src={LidarCar}
                /> */}
                <HoverImage
                  className="section05-project-img patcherImg"
                  image={LidarCar}
                  description="Lidar Mapping Vehicle"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="section05-row-project">
          <Col className="section05-project-col" lg={true}>
            <h2 className="section05-col1-title">
              Self-Rotating Media Platform
            </h2>
          </Col>
          <Col className="section05-project-col" lg={true}></Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
