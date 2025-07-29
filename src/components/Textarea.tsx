import { ChangeEvent, useState } from 'react';

export default function TextArea() {
  const [value, setValue] = useState("");
  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    console.log({val:e.target.value});
    setValue(e.target.value)
  }
  return (
    <textarea
      className='text-terminal field-sizing-content resize-none px-1 text-base outline-none caret-block'
      autoFocus
      value={value}
      onChange={handleChange}
      spellCheck='false'
    />
  );
}
