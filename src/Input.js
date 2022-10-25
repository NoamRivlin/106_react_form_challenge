import React from 'react';

const Input = ({ testId, value, onChange }) => {
  return (
    <input
      data-testid={testId}
      value={value}
      type='text'
      onChange={onChange}
      style={{ marginBottom: 5 }}
    />
  );
};

export default Input;
