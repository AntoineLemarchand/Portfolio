import React from 'react';


const Field = (props) => (
  <div>
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
      placeholder={props.placeholder}
    />
  </div>
);

export default Field;
