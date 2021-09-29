import { readFile, writeFile } from "fs/promises";

//ASYNC-AWAIT SYNTAX
async function read() {
  try {
    let template = await readFile("./index.html", "utf-8");
    const obj = {
      name: "Sayantika",
      adj: "Kolkata",
    };
    // for in loop for object iteration here ob is the key and obj[ob] is the value
    for (const ob in obj) {
      template = template.replace(`{${ob}}`, obj[ob]);
    }
    await writeFile("./app.html", template, "utf-8");
  } catch (err) {
    console.log(err);
  } finally {
    console.log(`Have a nice day`);
  }
}
read();
