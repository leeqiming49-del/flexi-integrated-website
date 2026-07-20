import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test("produces the Flexi production server bundle", async () => {
  await access(projectFile(".output/server/index.mjs"));
  await access(projectFile(".output/public"));

  const layout = await readFile(projectFile("app/layout.tsx"), "utf8");
  assert.match(layout, /Flexi Integrated/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
});

test("includes the RC1 project presentation refinements", async () => {
  const [styles, navbar, logoRiver, projectsPage, projectDetail] = await Promise.all([
    readFile(projectFile("app/globals.css"), "utf8"),
    readFile(projectFile("components/Navbar.tsx"), "utf8"),
    readFile(projectFile("components/LogoRiver.tsx"), "utf8"),
    readFile(projectFile("app/projects/page.tsx"), "utf8"),
    readFile(projectFile("components/ProjectDetail.tsx"), "utf8"),
  ]);

  assert.match(navbar, /aria-current/);
  assert.match(navbar, /pathname\.startsWith\("\/projects"\)/);
  assert.doesNotMatch(logoRiver, /oppo/i);
  assert.match(projectsPage, /Commercial Interior/);
  assert.match(projectDetail, /scope-tags/);
  assert.match(styles, /RC1 premium polish/);
  assert.match(styles, /\.project-summary \{ flex: 0 0 auto; min-height: 248px; \}/);
});
