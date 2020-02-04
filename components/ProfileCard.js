import { useState, useContext } from "react";
import styled from "styled-components";
import { store } from "../components/context/UserProvider";
import Form from "../components/styles/Form";
import FlexCenter, { FlexCenterColumn } from "../components/styles/FlexCenter";
import Avatar from "../components/Avatar";
import IconButton from "../components/styles/IconButton";
import UploadIcon from "../components/styles/UploadIcon";
import BasicButton from "../components/styles/BasicButton";

// TODO: Add Cloudinary image upload/update

const BasicInfo = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const { name, email, disabled } = globalState.state;
  const handleEdit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT" });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: "HANDLE_CHANGE", name, value });
  };
  const handleCancel = e => {
    e.preventDefault();
    dispatch({ type: "CANCEL" });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "SUBMIT", payload: e.target });
  };
  return (
    <>
      <ColumnTitle>Basic Info</ColumnTitle>
      <Card>
        <Form onSubmit={handleSubmit}>
          <FlexCenterColumn>
            <Avatar avatarImg="/static/me_square.png" />
            <IconButton>
              <UploadIcon />
              Upload Image
            </IconButton>
          </FlexCenterColumn>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            value={name}
            onChange={handleChange}
            disabled={disabled}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            disabled={disabled}
          />
          <FlexCenter>
            {disabled ? (
              <UpdateButton onClick={handleEdit}>Edit</UpdateButton>
            ) : (
              <>
                <CancelButton onClick={handleCancel}>Cancel</CancelButton>
                <UpdateButton type="submit">Update</UpdateButton>
              </>
            )}
          </FlexCenter>
        </Form>
      </Card>
    </>
  );
};

export default BasicInfo;

const ColumnTitle = styled.h2`
  color: ${props => props.theme.colors.gray700};
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 1.5rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  transition: all 0.3s ease;
  :hover {
    box-shadow: ${props => props.theme.shadows.bs2};
  }
`;

const UpdateButton = styled(BasicButton)`
  background: ${props => props.theme.colors.blue500};
  color: ${props => props.theme.colors.gray100};
  opacity: 0.8;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  margin: 1rem 0.5rem;
`;

const CancelButton = styled(BasicButton)`
  background: transparent;
  color: ${props => props.theme.colors.gray700};
  opacity: 0.8;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  margin: 1rem 0.5rem;
  border: none;
  transition: all 0.3s;
  &:hover {
    background: ${props => props.theme.colors.gray200};
  }
`;
