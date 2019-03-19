### The bug 

I have came across a bug while using UA parser in our requireJS based project. 
The error is demonstrated on this branch.

When you use a namespace in the requireJS optimizer, the optimizer uses a regex to find 
all references to the global `define` object and replace it with the namespaced version.

The bug is generated, when trying to build with a namespace on, since when the file is built
it will not have a global `define` to check against, just a namespaced one. 

### The Fix

To fix this, 
you have to use the actual string `'function''` to have the optimizer actually scope those
defines too. (See `r.js@26506 defineCheckRegExp`).

The fix is simple: use the AMD default template, and just use the actual string constant there instead
a variable.  

### To test

Run the two builds and compare the outputs: 

`node node_modules/requirejs/bin/r.js -o build.bad.js` // The old one.
`node node_modules/requirejs/bin/r.js -o build.js`

Look at the diff line `@1086` in the output files.

