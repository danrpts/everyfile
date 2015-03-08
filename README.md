# everyfile
Recurse through a directory structure and do stuff with every file!

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
