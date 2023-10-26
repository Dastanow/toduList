import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todus = useSelector((state) => state?.todus);
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get("https://jsonplaceholder.org/users");
  //     dispatch({
  //       type: 'GET_TODUS',
  //       payload: data.slice(0, 3),
  //     });
  //   };
  //   getData()
  //   console.log(todus);
  // }, []);

const hendleAdd = (e) => {
  e.preventDefault();
dispatch({
  type: "ADD__TODO",
  payload: input,
})
setInput("")
}
const addDellet = () => {
  dispatch({
  type: "ADD__DELETE",
  payload:  todus.length-1,
             
})
}


  return (
    <>
    <div className='tasks_'>
      <form onSubmit={hendleAdd}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='...' />
        <Button>add</Button>
      </form>
      <div className='tasks'>
        <div className='tasks__'>
          {
            
            todus?.map((item, id) => (
              <div  className='task' key={id}>
              <input type="text"  placeholder={item.id + "." + item.email } /> 
              <Button  onClick={() => addDellet(id)}>delete</Button>
              </div>
              )) 
            } 
        </div>
      </div>
    </div>
    </>
  )
}

export default App
