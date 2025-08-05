import { commandType } from '../types/types/Types';
import BlockCursor from './BlockCursor';
import Path from './Path';
interface Line {
  commandType: commandType;
  value: string;
  isActive?: boolean;
}

export default function Line({ commandType, value, isActive = false }: Line) {
  return (
    <div className='w-dvw cursor-default gap-2'>
      <div className='text-terminal flex gap-2'>
        {commandType === 'command' && <PrefixLine />}
        {isActive ? (
          <div className='flex gap-2 outline-none border-none' contentEditable>w</div>
        ) : (
          <div className='flex gap-2'>{value}</div>
        )}
        {isActive && <BlockCursor />}
      </div>
    </div>
  );
}

function PrefixLine() {
  return (
    <span>
      yellowflash@yellow-MacBook-Air <Path />
    </span>
  );
}
