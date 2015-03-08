# everyfile
Recurse through a directory structure and do stuff with every file!

---

The callback accepts three parameters: the current file's filename, pathname, and [stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) object.

## Asynchronous

```
every.async('.', function (filename, pathname) {

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

  console.log('%s: %s/%s', "Sync found", pathname, filename);

});
```
