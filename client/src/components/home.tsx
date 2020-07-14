import React from "react";
import styled, { css } from "react-emotion";
import { size } from "polished";

import space from "../assets/images/space.jpg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Curve } from "../assets/curve.svg";
import { ReactComponent as Rocket } from "../assets/rocket.svg";
import { colors, unit } from "../styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <StyledCurve />
        <StyledLogo />
      </Header>
      <StyledRocket />
      <Heading>Hello RISE!</Heading>
    </Container>
  );
};

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: "white",
  backgroundColor: colors.primary,
  backgroundImage: `url(${space})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const svgClassName = css({
  display: "block",
  fill: "currentColor",
});

const Header = styled("header")(svgClassName, {
  width: "100%",
  marginBottom: unit * 5,
  padding: unit * 2.5,
  position: "relative",
});

const StyledLogo = styled(Logo)(size(56), {
  display: "block",
  margin: "0 auto",
  position: "relative",
});

const StyledCurve = styled(Curve)(size("100%"), {
  fill: colors.primary,
  position: "absolute",
  top: 0,
  left: 0,
});

const Heading = styled("h1")({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

const StyledRocket = styled(Rocket)(svgClassName, {
  width: 250,
});

export default Home;
