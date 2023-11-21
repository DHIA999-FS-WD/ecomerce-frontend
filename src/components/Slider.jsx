import styled from "styled-components";
//import icons from fantawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import data for testing
import { sliderItems } from "../data";
import { useState } from "react";
//mobile
import { mobile } from "../responsiveStyle/responsive";
// i use styled-components
//-Slide container
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
// --Arrow button style
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  // with styled componets i used props to put our button in there place
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
//--Wrapper
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideindex * -100}vw);
`;
// Slide

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
//---image container
const ImgContainer = styled.div`
  height: 100%;

  flex: 1;
`;
//----image
const Img = styled.img`
  height: 80%;
`;
//---info container
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
//----Title
const Title = styled.h1`
  font-size: 70px;
`;
//----Desc
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
//----Button
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            handleClick("left");
          }}
        />
      </Arrow>

      <Wrapper slideindex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right">
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => {
            handleClick("right");
          }}
        />
      </Arrow>
    </Container>
  );
}

export default Slider;
