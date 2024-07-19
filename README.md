# bun-heic

## Quickstart
Build the executable and update your PATH to include the directory that contains it.
```bash
bun build --compile --minify --sourcemap index.ts --outfile beic # <-- can rename "beic" to whatever you want
```
Running `beic` will convert files and put stuff in the directory it was ran it.

### Develop
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts <path-to-heic-file>
# outputs: <filename>.jpg in directory where you ran the script
```

This project was created using `bun init` in bun v1.0.13. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
