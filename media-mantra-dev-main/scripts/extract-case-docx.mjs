import { readFileSync, writeFileSync } from "fs";
import { inflateRawSync } from "zlib";

const path = "C:/Users/AFX/Downloads/Case study- WEBSITE.docx";
const buf = readFileSync(path);
let offset = 0;
let xml = "";

while (offset < buf.length - 4) {
  if (buf[offset] !== 0x50 || buf[offset + 1] !== 0x4b) {
    offset++;
    continue;
  }
  const compMethod = buf.readUInt16LE(offset + 8);
  const compSize = buf.readUInt32LE(offset + 18);
  const nameLen = buf.readUInt16LE(offset + 26);
  const extraLen = buf.readUInt16LE(offset + 28);
  const name = buf.slice(offset + 30, offset + 30 + nameLen).toString("utf8");
  const dataStart = offset + 30 + nameLen + extraLen;
  const data = buf.slice(dataStart, dataStart + compSize);
  if (name === "word/document.xml") {
    xml = (compMethod === 0 ? data : inflateRawSync(data)).toString("utf8");
    break;
  }
  offset = dataStart + compSize;
}

const text = xml
  .replace(/<w:tab[^>]*\/>/g, "\t")
  .replace(/<\/w:p>/g, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");

writeFileSync("case-study-extract.txt", text, "utf8");
console.log(text);
