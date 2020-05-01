import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: ${props => props.theme.green};
  border: 1px solid ${props => props.theme.green};
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

export default ({ title, value }) => (
  <Container>
    <Value>{value}</Value>
    <Title>{title}</Title>
  </Container>
);
