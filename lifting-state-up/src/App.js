import { useState } from 'react';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div>
      <Input label="First Input" value={text} onChange={handleChange} />
      <Input label="Second Input" value={text} onChange={handleChange} />
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  )
}