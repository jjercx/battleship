import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.color ?? "gray"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Value = styled.span`
  font-size: 40px;
  flex: 1;
  align-self: center;
  font-weight: 300;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export default ({ color, title, value }) => (
  <Container color={color}>
    <Value>{value}</Value>
    <Title>{title}</Title>
  </Container>
);
