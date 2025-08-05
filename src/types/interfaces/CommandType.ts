import { commandType } from '../types/Types';

export default interface Commands {
  id: string;
  type: commandType;
  value: string;
}
