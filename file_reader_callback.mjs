import { readFile, writeFile } from "fs";

readFile("./index.html", "utf-8", (err, template) => {
  if (err) {
    console.log(err);
    return;
  }
  const obj = {
    name: "Sayantika",
    adj: "Kolkata",
  };
  for (const ob in obj) {
    template = template.replace(`{${ob}}`, obj[ob]);
  }
  writeFile("./app.html", template, "utf-8", (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
});
