import app from "./app";

const port = 3000;

async function main() {
  app.listen(port, () => {
    console.log("Server is running on port ", port);
  });
}

// main().catch((error) => {
//   console.error("Error starting server:", error);
//   process.exit(1);
// });

main();
