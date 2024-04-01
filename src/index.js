import { dynamic_theme } from "./dynamic-theme.js";

import { mkdir, writeFile } from "node:fs/promises";

mkdir("./themes", { recursive: true })
  .then(() => {
    Promise.all([
      writeFile(
        "./themes/Season Color-color-theme.json",
        JSON.stringify(dynamic_theme(), null, 2)
      ),
    ]);
  })
  .catch((e) => {
    console.error(`Some error occur: ${e}`);
  });
