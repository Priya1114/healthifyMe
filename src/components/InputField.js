import React from 'react';

function InputField(props) {
  const {
    data: {value, error},
    name,
    placeholder,
  } = props;
  return (
    <div className="form-field">
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={error ? 'errorInput': ''}
        onChange={props.handleInputChange}
      />
      <div className="error-block">
        {error}
      </div>
    </div>
  )
}

export default InputField;