import React, {useRef} from 'react'

const Newtask = (props) => {
    const entertask = useRef('');
    const addItem = () =>{
props.addtask(entertask.current.value);
entertask.current.value = '';
    }
  return (
    <div>
        <input ref={entertask} type="text" onBlur={addItem}/>
    </div>
  )
}

export default Newtask