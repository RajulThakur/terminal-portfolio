import { useCallback, useEffect, useState } from 'react';
import Commands from '../types/interfaces/CommandType';
import {
  appendToCommandHistory,
  getCommandHistory,
} from '../utility/localStorage';
import Line from './Line';
import ToolBar from './Toolbar';

export default function Terminal() {
  const commands: Commands[] = getCommandHistory() || [];
  const [value, setValue] = useState('');
  function handleSubmit(command: string) {
    appendToCommandHistory({
      id: `${Date.now()}`,
      type: 'command',
      value: command,
    });
  }
  const handleMemo = useCallback(handleKeyDown, [value]);
  function handleKeyDown(e: globalThis.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSubmit(value);
      setValue('');
    } else setValue((text) => text + e.key);
  }
  useEffect(() => {
    document.body.addEventListener('keydown', handleMemo);
    return () => {
      document.body.removeEventListener('keydown', handleMemo);
    };
  }, [handleMemo]);
  return (
    <div className='font-terminal pt-13'>
      <ToolBar />
      {commands.map((command) => (
        <Line
          key={command.id}
          commandType={command.type}
          value={command.value}
        />
      ))}
      <Line isActive={true} commandType='command' value={value} />
    </div>
  );
}
