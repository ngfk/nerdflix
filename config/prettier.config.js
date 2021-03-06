module.exports = {
  // Specify the line length that the printer will wrap on.
  printWidth: 80,

  // Specify the number of spaces per indentation-level.
  tabWidth: 2,

  // Indent lines with tabs instead of spaces.
  useTabs: false,

  // Print semicolons at the ends of statements.
  semi: true,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Change when properties in objects are quoted.
  quoteProps: 'consistent',

  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: false,

  // Print trailing commas wherever possible when multi-line. (A single-line
  // array, for example, never gets trailing comma.)
  trailingComma: 'all',

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Include parentheses around a sole arrow function parameter.
  arrowParens: 'avoid',

  // Format only a segment of a file.
  rangeStart: 0,
  rangeEnd: Infinity,

  // Prettier can restrict itself to only format files that contain a special
  // comment, called a pragma, at the top of the file. This is very useful
  // when gradually transitioning large, unformatted codebases to prettier.
  requirePragma: false,

  // Prettier can insert a special @format marker at the top of files specifying
  // that the file has been formatted with prettier. This works well when used
  // in tandem with the --require-pragma option. If there is already a docblock
  // at the top of the file then this option will add a newline to it with the
  // @format marker.
  insertPragma: false,

  // By default, Prettier will wrap markdown text as-is since some services use
  // a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some
  // cases you may want to rely on editor/viewer soft wrapping instead, so this
  // option allows you to opt out with "never".
  proseWrap: 'preserve',

  // Specify the global whitespace sensitivity for HTML files, see
  // whitespace-sensitive formatting for more info.
  htmlWhitespaceSensitivity: 'ignore',

  // Whether or not to indent the code inside <script> and <style> tags in Vue
  // files. Some people (like the creator of Vue) don???t indent to save an
  // indentation level, but this might break code folding in your editor.
  vueIndentScriptAndStyle: false,

  // Control whether Prettier formats quoted code embedded in the file.
  embeddedLanguageFormatting: 'auto',
};
