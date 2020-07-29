/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 46px;
      color: ${(props) => props.arrow};
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        textColor: "green",
        background: `linear-gradient(-90deg, #000, transparent)`,
        height: "197px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vh",
        marginRight: -16,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: `linear-gradient(-90deg, transparent, #212121)`,
        height: "197px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

function Slider(props) {
  const { arrow } = props;
  return (
    <Container arrow={arrow}>
      <SlickSlider
        {...{
          dots: false,
          infinite: true,
          speed: 500,
          centerMode: true,
          variableWidth: true,
          adaptiveHeight: true,
          initialSlide: 2,
          accessibility: true,
          focusOnSelect: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }}
      >
        {props.children}
      </SlickSlider>
    </Container>
  );
}

export default Slider;
