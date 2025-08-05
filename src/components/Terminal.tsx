import { useTextStore } from '../store/textStore';
import Commands from '../types/interfaces/CommandType';
import { getCommandHistory } from '../utility/localStorage';
import Line from './Line';
import ToolBar from './Toolbar';


export default function Terminal() {
  const commands: Commands[] = getCommandHistory() || [];
  const { text } = useTextStore();
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
      <Line isActive={true} commandType='command' value={text} />
    </div>
  );
}
