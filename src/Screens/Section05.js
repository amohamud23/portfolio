import React from "react";
import "./../css/Section5.css";
import { Container, Row, Col } from "react-bootstrap";
import Patcher from "../assets/patcher.png";
import Lidar from "../assets/lidar.png";
import LidarCar from "../assets/LidarCar.png";
import HoverImage from "../Components/HoverImage";
import PatcherDispatcher from "../assets/Patcher_Dispatcher.jpg";
import PatcherMap from "../assets/Patcher_Map.jpg";
import Platform from "../assets/platform.jpg";
import BoundBox from "../assets/ObjectDetect.jpg";

class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Container className="section05" fluid>
        <h1 className="section05-title">Projects</h1>
        <Row className="section05-row-project">
          <Col
            className="section05-project-col"
            style={{ padding: "5%" }}
            lg={5}
          >
            <h2 className="section05-col1-title">Patcher</h2>
            <ul>
              <li>
                {" "}
                Founded a startup which focuses on the development of web and
                mobile logistic software that improves the transportation of
                individuals who need medical assistance with efficiency, safety,
                and quality.
              </li>
              <li>
                {" "}
                Leading the web and mobile projects to develop a highly
                efficient and scalable software for 100+ drivers.
              </li>
              <li>
                Developed multiple pages on the React framework and using
                Firebase as my database and authentication.
              </li>
              <li>
                The project is a web application an mobile app in conjuction for
                the drivers to communicate to dispatchers.
              </li>
            </ul>
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
          <Col
            className="section05-project-col"
            style={{ padding: "5%" }}
            lg={5}
          >
            <h2 className="section05-col1-title">Lidar Mapping Vehicle</h2>
            <ul>
              <li>
                {" "}
                Lead Software Engineer in a team of 3 handling the software
                design and data processing.
              </li>
              <li>
                {" "}
                Developed and implemented a web API to send thousands of lidar
                points to my local backend webserver.
              </li>
              <li>
                The vehicle completely mapped an area of 12m radius using a
                collection of 3D points to create geographical image.
              </li>
              <li>
                A RasberryPi unit was used to send and recieve data from my
                Lidar unit. I transmitted the data to an access point and send
                that data to my laptop.
              </li>
            </ul>
          </Col>
          <Col lg={true}>
            <Row>
              <Col className="section05-project-col" lg={true}>
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
              <Col className="section05-project-col" lg={true}>
                <HoverImage
                  className="section05-project-img patcherImg"
                  image={Lidar}
                  description="Lidar Data"
                />
              </Col>
              <Col className="section05-project-col" lg={true}>
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
          <Col
            className="section05-project-col"
            style={{ padding: "5%" }}
            lg={5}
          >
            <h2 className="section05-col1-title">
              Self-Rotating Media Platform
            </h2>
            <ul>
              <li>
                {" "}
                Team Software Lead for the image recognition and data collection
                for serial output.
              </li>
              <li>
                {" "}
                Integrated open source object detection software with a camera
                and servo to track bounding boxes.
              </li>
              <li>
                The prototype unit, while connected to a motor, seamlessly
                followed me around aligning me with the screens.
              </li>
              <li></li>
            </ul>
          </Col>
          <Col className="section05-project-col" lg={true}>
            <h4 className=" patcherImg">Example Images{"----->"}</h4>
          </Col>
          <Col className="section05-project-col" lg={true}>
            {/* <Image
                  style={{
                    width: "100%",
                  }}
                  src={LidarCar}
                /> */}

            <HoverImage
              className="section05-project-img patcherImg"
              image={Platform}
              description="Platform that Rotates"
              onClick={this.handleShowDialog}
            />
          </Col>
          <Col className="section05-project-col" lg={true}>
            <HoverImage
              className="section05-project-img patcherImg"
              image={BoundBox}
              description="Human Bounding Box"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
