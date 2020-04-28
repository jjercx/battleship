import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.color ?? "gray"};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
`;

const Value = styled.span`
  font-size: 60px;
  flex: 1;
  align-self: center;
`;

const Title = styled.span`
  font-size: 30px;
`;

export default ({ color, title, value }) => (
  <Container color={color}>
    <Value>{value}</Value>
    <Title>{title}</Title>
  </Container>
);
