# everyfile
Recurse through a directory structure and do stuff with every file!

---

The callback accepts three parameters: the current file's name, relative path, and [stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) object.

## Asynchronous

```
var every = require('everyfile');

every.async('.', function (filename, pathname) {
  
  // do stuff...
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
every.sync('.', function (filename, pathname) {
  
  // other stuff ...
  console.log('%s: %s/%s', "Sync found", pathname, filename);

});
```
