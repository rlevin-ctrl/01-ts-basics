// Завдання 5. Union Type
type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else {
    console.log("Something went wrong");
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
