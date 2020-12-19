import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HoverImage extends React.Component {
  render() {
    const { image, description, className, style } = this.props;
    return (
      <MDBView style={style} className={className} hover>
        <img src={image} className="img-fluid" alt="" />
        <MDBMask className="flex-center" overlay="black-strong">
          <p className="white-text" style={{ fontSize: "25px" }}>
            {description}
          </p>
        </MDBMask>
      </MDBView>
    );
  }
}

export default HoverImage;
