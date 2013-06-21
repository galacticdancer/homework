#!/usr/bin/env node hw1.js
var fs = require('fs');
var outfile ="hell.txt";
var out = "The world is your playground.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);