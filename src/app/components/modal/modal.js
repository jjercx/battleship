import React from "react";
import styled from "styled-components";
import Title from "app/components/title";

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.black}99;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 100%;
  max-height: 100%;
  background-color: ${props => props.theme.black};
  box-shadow: inset 0px 0px 0px 2px ${props => props.theme.green};
  box-sizing: border-box;
  padding: 30px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    margin-bottom: 30px;
  }
`;

export default ({ title, children, isVisible = false }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Backdrop>
      <Container>
        <Title text={title} className="title" />
        {children}
      </Container>
    </Backdrop>
  );
};
