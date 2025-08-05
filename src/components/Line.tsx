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
    <p className='text-terminal mt-0.5 w-dvw cursor-default gap-2'>
      {commandType === 'command' && PrefixLine()}
      {value}
      {isActive && <BlockCursor/>}
    </p>
  );
}

function PrefixLine() {
  return `yellowflash@yellow-MacBook-Air ${Path()}`;
}
