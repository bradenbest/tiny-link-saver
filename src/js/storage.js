var STORAGE_KEY = "Tiny Link Saver";

function get_storage(){
  /*
   * arguments: void
   * return:    object
   */
  var storage = {};

  if(typeof localStorage[STORAGE_KEY] !== "undefined"){
    storage = JSON.parse(localStorage[STORAGE_KEY]);
  }else{
    storage = {
      "links" : []
    };
  }

  return storage;
}

function save_storage(storage){
  /*
   * arguments: object storage
   * return:    void
   */
  localStorage[STORAGE_KEY] = JSON.stringify(storage);
}
