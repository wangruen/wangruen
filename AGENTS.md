# AGENTS.md

Static 《高级网页设计》 coursework repo: plain HTML/CSS/JS, no framework, package manager, build, test, or lint. There is nothing to install; verify changes by opening the HTML in a browser (or a static server).

## Entrypoints & layout

- `index.html` (root) — course homepage/module directory. Adding a classroom module means adding a link here too.
- `四级项目/` — main graded deliverable: Pinduoduo (拼多多) mobile clone.
  - Shared stylesheet: `四级项目/css/24002120528.王如恩.style.css`, classes prefixed `wre_*`, organized into `/* ===== 页面：区域 ===== */` sections. Add rules inside the matching section.
  - Pages: `四级项目/pdd-mobile/24002120528.王如恩.{首页,搜索,商品详情页}.html`. They reference assets as `..//css/...` and `..//img/...`, so new pages must live in `pdd-mobile/`.
  - Images: `四级项目/img/` (product images, icons, local iconfont).
- `四级项目/index.html` — separate, smaller duplicate directory page; not linked from the root index. Don't confuse it with the real root `index.html`.
- `四级项目2/` — independent alternate PDD page (`pdd.html` + `pdd.css`) using the iconfont in `download (1)/font_5245311_1jm1dgnruk3/`. Do not merge with `四级项目/`.
- `starter-level1.html` — student score dashboard exercise. Its data is embedded in the file; the root `data.js` is a standalone data source that exposes `window.STUDENTS` / `window.SUBJECTS` and is not loaded by `starter-level1.html`.
- Icon demos: `iconfont-1.html` (local Font Awesome in `cdn/font-awesome/`), `inconfont-2.html` (name typo is intentional; local Lucide in `cdn/lucide/`), `iconfont-3.html` (iconfont font CSS), `iconfont-4.html` and `字体图标.html` (iconfont SVG symbol via `font/font_5231987_xajilc7mun8/iconfont.js`).
- Standalone exercises: `Flex复习.*`, `猜数.html`, `抓小球*.html`, `数据类型.*`, `JS_obj.html`, `obj005.html`, `JS_boj_apply.html`.

## Conventions

- Keep it vanilla HTML/CSS/JS; no framework or bundler unless explicitly requested.
- No external network assets. All fonts/CSS/JS libraries are vendored locally under `cdn/`, `font/`, and `四级项目/img/font/`. Reference local paths; never add a CDN URL.
- Chinese filenames, titles, content, and comments are intentional. Preserve UTF-8 and exact names (e.g. `inconfont-2.html`, `24002120528.王如恩.首页.html`). PowerShell may render these names as mojibake in the console; that is a display issue, not file corruption.
- Root exercises often use one self-contained file with inline `<style>`/`<script>`; the `四级项目/` pages use the shared external stylesheet. Follow the existing pattern of the file you edit.
- Exercise pages deliberately use `prompt`/`alert`/`console.log` and `document.write`; don't "modernize" them into a UI unless asked.
- Every new HTML file must begin with an HTML comment right after the doctype, containing: 作者 王如恩、建立时间（创建日期）、使用大模型（生成该文件的模型名）、功能名称（该页面用途）。Format: `<!-- 作者：王如恩 | 建立时间：YYYY-MM-DD | 使用大模型：<model> | 功能名称：<用途> -->`.
- Every JS function must have a preceding comment (Chinese) describing what the function mainly does, e.g. `// 功能：校验表单输入并弹出提示`.
- Also applies to CSS/JS identifiers: classes, ids, and JS variables start with `wre_`.
- Before executing any user prompt, append it (time, model, prompt text) to `24002120528-王如恩.txt` in the repo root; never overwrite existing content.
