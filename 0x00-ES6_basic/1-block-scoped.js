export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;   // Remove 'var' keyword here
    task2 = false; // Remove 'var' keyword here
  }

  return [task, task2];
}
