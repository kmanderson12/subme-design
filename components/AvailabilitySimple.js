import { useState } from "react";
import styled from "styled-components";
import BasicButton from "./styles/BasicButton";
import { FlexCenterColumn } from "./styles/FlexCenter";

const initialState = [
  { day: "Monday", available: true, amount: "" },
  { day: "Tuesday", available: false, amount: "" },
  { day: "Wednesday", available: true, amount: "" },
  { day: "Thursday", available: true, amount: "" },
  { day: "Friday", available: false, amount: "" }
];
const AvailabilitySimple = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [data, setData] = useState(initialState);

  const setCurrent = e => {
    setCurrentDay(e.target.value);
  };
  const setDay = index => e => {
    let value = e.target.value === "true";
    let newArr = [...data];
    newArr[index] = {
      day: e.target.name,
      available: value,
      amount: ""
    };
    setData(newArr);
  };

  return (
    <FlexCenterColumn>
      <DaysOfTheWeek>
        {data.map((item, index) => {
          return (
            <Day
              key={index}
              value={index}
              onClick={setCurrent}
              name={item.day}
              available={item.available}
            >
              {item.day}
            </Day>
          );
        })}
      </DaysOfTheWeek>
      <p>{data[currentDay].day}</p>
      <ToggleSwitch currentDayStatus={data[0].available}>
        <label class="switch">
          <input
            id="avail"
            type="checkbox"
            onClick={setDay(currentDay)}
            checked={data[currentDay].available}
            name={data[currentDay].day}
            value={!data[currentDay].available}
          />
          <span class="slider round"></span>
        </label>
        {data[currentDay].available ? (
          <p className="toggleLabel">Available</p>
        ) : (
          <p
            className="toggleLabel"
            style={{
              color: "#00000096"
            }}
          >
            Not Available
          </p>
        )}
      </ToggleSwitch>
    </FlexCenterColumn>
  );
};

export default AvailabilitySimple;

const Day = styled.button`
  flex-grow: 1;
  border: 1px solid rgba(43, 90, 102, 0.3);
  background: ${props => (props.available ? "#54CE68" : "#FBB8B8")};
  opacity: ${props => (props.selectedDay === props.name ? 0.7 : 1)};
  color: ${props =>
    props.selectedDay === props.name ? "white" : props.theme.black};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .toggleLabel {
    font-size: 1.25rem;
    margin: 0;
  }
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #54b5ce;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #54b5ce;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const DaysOfTheWeek = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 0 auto;
  width: 100%;
  border: 2px solid rgba(43, 90, 102, 0.7);
  border-radius: 8px;
  button {
    border-right: 1px solid rgba(43, 90, 102, 0.7);
    font-family: "Montserrat";
    font-size: 1.5rem;
    padding: 0.5rem;
    outline: none;
  }
  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 1rem;
  max-width: 400px;
  border: 2px solid rgba(43, 90, 102, 0.7);
  border-radius: 8px;
  button {
    border-right: 1px solid rgba(43, 90, 102, 0.7);
    font-family: "Montserrat";
    font-size: 1.5rem;
    padding: 0.5rem;
    outline: none;
  }
  button:first-child {
    border-radius: 5px 0 0 5px;
  }
  button:last-child {
    border-radius: 0 5px 5px 0;
    border-right: none;
  }
`;
const BtnInGroup = styled.button`
  flex-grow: 1;
  border: 1px solid rgba(43, 90, 102, 0.3);
  background: ${props =>
    props.amountStatus === props.name ? "#54b5ce" : "#ccccccb5"};
  color: ${props =>
    props.amountStatus === props.name ? "white" : "#393939c2"};
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
