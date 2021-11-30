import {
  getSnippetsPath,
  getLanguageSnippets,
  writeSnippetToFile,
} from "./utils.mjs";

const SNIPPETS_PATH_PATTERN = "snippets/**/*.md";
const ROOT_SNIPPETS_DIR = `${process.cwd()}/UltiSnips`;
const JS_1LOC_SNIPPETS_PATH = `${ROOT_SNIPPETS_DIR}/javascript.snippets`;
const TS_1LOC_SNIPPETS_PATH = `${ROOT_SNIPPETS_DIR}/typescript.snippets`;

(async () => {
  try {
    const snippetPaths = await getSnippetsPath(SNIPPETS_PATH_PATTERN);
    const [jsSnippets, tsSnippets] = getLanguageSnippets(snippetPaths);
    writeSnippetToFile(JS_1LOC_SNIPPETS_PATH, jsSnippets);
    writeSnippetToFile(TS_1LOC_SNIPPETS_PATH, tsSnippets);
  } catch (error) {
    console.log(error);
  }
})();
