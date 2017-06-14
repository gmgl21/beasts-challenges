(function() {
  var libraryStorage  = {};
  function librarySystem(libraryName, dependenciesArray, callback){
    if (arguments.length > 1) {
      libraryStorage[libraryName] = {
        callback: callback,
        dependencies: dependenciesArray,
        storeLibrary: null
      };
    } else {
        return addLibrary(libraryName);
    };
  }
  function addLibrary(libraryName) {
    var library = libraryStorage[libraryName];
    if (library.storeLibrary === null){
      var libraryDependencies = library.dependencies.map(function(dependency){
        return librarySystem(dependency);
      });
      library.storeLibrary = library.callback.apply(this, libraryDependencies);
    }
    return library.storeLibrary;
  }
  window.librarySystem = librarySystem;
}) ();
