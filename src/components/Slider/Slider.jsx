import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styled from "styled-components";

const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://www.ukmodels.co.uk/wp-content/uploads/2013/12/shutterstock_562722979-min.jpg.webp",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div.attrs((props) => ({
  'data-slide-index': props.slideIndex, // For debugging purposes (optional)
}))`
  height: 100%;
  display: flex;
  transition: ${(props) => (props.isTransitioning ? "all 0.8s ease" : "none")};
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;


const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: auto;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [manualInteraction, setManualInteraction] = useState(false);

  const totalSlides = sliderItems.length;

  // Create clones
  const slidesWithClones = [
    sliderItems[totalSlides - 1], // Clone of the last slide
    ...sliderItems,
    sliderItems[0], // Clone of the first slide
  ];

  const handleClick = (direction) => {
    setManualInteraction(true); // Mark manual interaction
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    // Handle reset to the real first or last slide seamlessly
    if (slideIndex === 0) {
      setIsTransitioning(false);
      setSlideIndex(totalSlides);
    } else if (slideIndex === totalSlides + 1) {
      setIsTransitioning(false);
      setSlideIndex(1);
    }
  };

  useEffect(() => {
    // Reset auto-slide timer whenever there is a manual interaction
    if (manualInteraction) {
      const timeout = setTimeout(() => {
        setManualInteraction(false); // Clear manual interaction
      }, 1000); // Wait before resuming auto-slide

      return () => clearTimeout(timeout);
    }
  }, [manualInteraction]);

  useEffect(() => {
    // Auto-slide only when there's no manual interaction
    if (!manualInteraction) {
      const interval = setInterval(() => {
        setSlideIndex((prev) => prev + 1); // Auto-slide forward
        setIsTransitioning(true);
      }, 2000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [manualInteraction]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper
        slideIndex={slideIndex}
        isTransitioning={isTransitioning}
        onTransitionEnd={handleTransitionEnd}
      >
        {slidesWithClones.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
