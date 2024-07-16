const path = require("path");

module.exports = function () {
  const { context } = this; //context is parent-folder location of sqlite3-bindings.js (lib folder)
  const sqlite3path = path.resolve(
    context,
    "../build/Release/node_sqlite3.node"
  );
  const pathFromFileNameToSqlite3 = path.relative(__filename, sqlite3path); //__filename is this file, index.js

  const compiledInstance = require("bindings")(pathFromFileNameToSqlite3);
  const absolutePath = compiledInstance.path.replace(/\\/g, "/");
  return `module.exports = exports = require(\`${absolutePath}\`);`;
};
