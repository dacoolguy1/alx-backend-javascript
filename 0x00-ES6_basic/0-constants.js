/**
 * Returns the first task.
 * @return {string} The first task.
 */
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
/**
 * Returns the last part of a task.
 * @return {string} The last part of a task.
 */
export function getLast() {
  return ' is okay';
}
/**
 * Returns a combination of task and last part.
 * @return {string} The combination of task and last part.
 */
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
