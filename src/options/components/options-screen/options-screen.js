import React, { useState } from "react";
import styled from "styled-components";
import Title from "app/components/title";
import { withRouter } from "react-router-dom";
import * as routes from "app/constants/routes";
import * as actions from "options/redux/options.actions";
import { compose } from "redux";
import { connect } from "react-redux";
import { getSize } from "game/redux/game.reducer";
import Close from "app/components/close";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  color: white;
  background-color: ${props => props.theme.black};
  border: 1px solid white;
  font-size: 24px;
  width: 100px;
  margin-left: 20px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const InputLabel = styled.span`
  color: white;
  font-size: 24px;
`;

export const OptionsScreen = ({ history, size, setSize }) => {
  const [text, setText] = useState(size);

  const handleChange = event => {
    const text = event.target.value;

    if (text === "" || (/^\d*$/.test(text) && parseInt(text) > 0)) {
      setText(text);
      if (text) {
        setSize({ size: parseInt(text) });
      }
    }
  };

  const handleClose = () => history.replace(routes.HOME);

  return (
    <Container>
      <Close onClick={handleClose}>X</Close>
      <Content>
        <Title text="Options" className="title"></Title>
        <Row>
          <InputLabel>Grid size:</InputLabel>
          <Input value={text} onChange={handleChange} />
        </Row>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = state => ({
  size: getSize(state),
});

export default compose(
  withRouter,
  connect(mapDispatchToProps, actions)
)(OptionsScreen);
