import React from 'react'
import {Input, Button} from 'antd';

// function handleChange(e){
//     this.props.onChange(e.target.value)
// }

const InputBox = (props) => {
    return (
        <div>
            <Input onChange={props.handleChange}/>
        </div>
    )
};

export default InputBox