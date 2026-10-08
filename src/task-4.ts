// Завдання 4. Типізація функцій
function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);
  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("Oleh", 25);
printUserInfo("Oleh", 25, "oleh@example.com");
