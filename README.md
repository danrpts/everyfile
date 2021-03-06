# everyfile
Recurse through a directory structure and do stuff with every file!

---
Notice: I would use [node-glob](https://github.com/isaacs/node-glob) instead of this.

---
The callback is passed three arguments: the current file's name, relative path, and [stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) object.

## Asynchronous

```
var every = require('everyfile');

every.async('.', function (filename, pathname, filestats) {

  // do stuff ...
  console.log('%s: %s/%s', "Async found", pathname, filename);

});
```


## Synchronous

```
var files = every.sync('.');
console.log(files);
```
or
```
every.sync('.', function (filename, pathname, filestats) {

  // other stuff ...
  console.log('%s: %s/%s', "Sync found", pathname, filename);

});
```

---

Feedback, tests and pull requests are welcomed.
