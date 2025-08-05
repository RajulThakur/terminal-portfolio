import Commands from '../types/interfaces/CommandType';

export function setCommandHistory(history: Commands[]) {
  localStorage.setItem('commandHistory', JSON.stringify(history));
}
export function getCommandHistory(): Commands[] {
  const history = localStorage.getItem('commandHistory');
  return history ? JSON.parse(history) : [];
}
export function clearCommandHistory() {
  localStorage.removeItem('commandHistory');
}
export function appendToCommandHistory(command: Commands) {
  const history = getCommandHistory();
  const updatedHistory = [...history, command];
  setCommandHistory(updatedHistory);
}
