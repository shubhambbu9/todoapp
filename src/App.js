import React, { useState } from "react";
import Button from '@mui/material/Button';
import TodoList from './TodoList'

function App() {
  const cssStyle = {
    backgroundColor: '#7adfbb',
    margin: "0px 0px 0px 7px",
    borderRadius: "20%"
  }
  const [item, setItem] = useState();

  const [newItem, setNewItem] = useState([]);

  const listOfItem = (props) => {
    setItem(props.target.value)
  }
  const onClickbtn = () => {
    setNewItem((preValue) => {
      return [...preValue, item]
    })
    setItem("");
  }



  return (
    <div className="main_div">
      <div className="center_div">
        <h1> ToDo Lists </h1>
        <input type="text"
          placeholder='Add an items..'
          onChange={listOfItem}
          value={item}
        />
        <Button style={cssStyle}
          onClick={onClickbtn}> + </Button>

        {
          newItem.map((val) => {
            return (<>
              <TodoList
                text={val}
              />
            </>)
          })}



      </div>
    </div>
  );
}

export default App;
