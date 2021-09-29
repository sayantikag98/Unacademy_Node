import { readFile, writeFile } from "fs/promises";

//NORMAL PROMISE SYNTAX
readFile("./index.html", "utf-8")
  .then((template) => {
    const obj = {
      name: "Sayantika",
      adj: "Kolkata",
    };
    for (const ob in obj) {
      template = template.replace(`{${ob}}`, obj[ob]);
    }
    writeFile("./app.html", template, "utf-8");
  })
  .catch((err) => console.log(err));

/*
__dirname is deprecated its alternative is import.meta.url
*/

// console.log(__dirname);
// console.log(import.meta.url);
