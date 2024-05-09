import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const a = readdirSync("./source/CactusClassicalSerif-Regular.ufo", {
  withFileTypes: true,
}).filter((o) => o.isFile());
const b = readdirSync("./source/CactusClassicalSerif-Regular.ufo/glyphs", {
  withFileTypes: true,
}).filter((o) => o.isFile());

for (const file of a) {
  const path = `${file.path}/${file.name}`;
  let data = readFileSync(path, "utf-8");
  if (data.charCodeAt(0) === 0xfeff) {
    data = data.slice(1);
    writeFileSync(path, data);
  }
}

for (const file of b) {
  const path = `${file.path}/${file.name}`;
  let data = readFileSync(path, "utf-8");
  if (data.charCodeAt(0) === 0xfeff) {
    data = data.slice(1);
    writeFileSync(path, data);
  }
}

let fontinfo = readFileSync(
  "./source/CactusClassicalSerif-Regular.ufo/fontinfo.plist",
  "utf-8"
);

if (!fontinfo.includes("<key>encodingID</key>")) {
  fontinfo = fontinfo.replace(
    new RegExp(`<key>platformID</key>\\n\\s+<integer>3</integer>`),
    "<key>platformID</key><integer>3</integer><key>encodingID</key><integer>10</integer>"
  );
  writeFileSync(
    "./source/CactusClassicalSerif-Regular.ufo/fontinfo.plist",
    fontinfo
  );
}

let features = readFileSync(
  "./source/CactusClassicalSerif-Regular.ufo/features.fea",
  "utf-8"
);

if (features.includes("@\\BASE")) {
  features = features.replace(/@\\BASE.*/s, "");
  writeFileSync(
    "./source/CactusClassicalSerif-Regular.ufo/features.fea",
    features
  );
}
