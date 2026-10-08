// Завдання 5. Union Type
type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  console.log(status);
}

logStatus("loading");
logStatus("success");
logStatus("error");
