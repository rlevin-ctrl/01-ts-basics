// Завдання 7. Типізація Promise
function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

getMessage().then((result: string) => {
  console.log(result);
});
