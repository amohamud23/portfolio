import React from "react";
import { MDBMask, MDBView } from "mdbreact";

class HoverImage extends React.Component {
  render() {
    const { image, description, className, style, onClick } = this.props;
    return (
      <MDBView onClick={onClick} style={style} className={className} hover>
        <img src={image} className="img-fluid" alt="" />
        <MDBMask className="flex-center" overlay="black-strong">
          <p
            className="white-text"
            style={{ fontSize: "25px", textAlign: "center" }}
          >
            {description}
          </p>
        </MDBMask>
      </MDBView>
    );
  }
}

export default HoverImage;
