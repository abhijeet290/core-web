const fs = require("fs");

fs.readFile("./data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log("File content:", jsonData);
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
