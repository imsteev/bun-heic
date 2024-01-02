import convert from "heic-convert";

async function main() {
  if (Bun.argv.length !== 3) {
    throw "must supply path to HEIC file";
  }

  const file = Bun.file(Bun.argv[2]);

  // /path/to/img.heic -> img
  const name = file?.name?.split("/").at(-1)?.replace(/.heic/i, "");

  const buffer = new Uint8Array(await file.arrayBuffer());
  const out = await convert({
    buffer,
    format: "JPEG",
    quality: 0.75,
  });

  Bun.write(`${name}.jpg`, out);
}

main();
