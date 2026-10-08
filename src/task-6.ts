// Завдання 6. Узагальнені типи
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["a", "b", "c"]);
const firstBoolean = getFirstElement<boolean>([true, false]);
