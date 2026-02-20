import { NextResponse } from "next/server";
import JSZip from "jszip";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

const PROJECT_ROOT = join(process.cwd());

const INCLUDE_PATHS = [
  "src",
  "public",
  "package.json",
  "next.config.ts",
  "tsconfig.json",
  "postcss.config.mjs",
];

function addToZip(zip: JSZip, fsPath: string, zipPath: string) {
  try {
    const stat = statSync(fsPath);
    if (stat.isDirectory()) {
      const entries = readdirSync(fsPath);
      for (const entry of entries) {
        // skip node_modules and .next build artifacts inside src
        if (entry === "node_modules" || entry === ".next") continue;
        addToZip(zip, join(fsPath, entry), zipPath + "/" + entry);
      }
    } else {
      const content = readFileSync(fsPath);
      zip.file(zipPath, content);
    }
  } catch {
    // skip unreadable files
  }
}

export async function GET() {
  const zip = new JSZip();
  const root = zip.folder("score-smart")!;

  for (const p of INCLUDE_PATHS) {
    const fsPath = join(PROJECT_ROOT, p);
    try {
      statSync(fsPath);
      addToZip(root, fsPath, p);
    } catch {
      // skip if not found
    }
  }

  const buffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

 return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="score-smart-website.zip"',
      "Content-Length": buffer.length.toString(),
    },
  });
}
