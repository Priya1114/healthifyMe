import React from 'react';

function InputField(props) {
  const { data, name, type, placeholder } = props;
  return (
    <div className="form-field">
      <input
        name={name}
        type={type}
        value={data.value}
        placeholder={placeholder}
        className={data.error ? 'errorInput': ''}
        onChange={props.handleInputChange}
      />
      <div className="error-block">
        {data.error}
      </div>
    </div>
  )
}

export default InputField;