function init_events(){
  /*
   * arguments: void
   * return: int/exception
   */
  try{

    add_link_btn.onclick = function(){
      var storage = get_storage();
      if( add_link(storage) ){
        console.log("Nothing was entered for one or more fields. Aborting.");
        return;
      }
      save_storage(storage);
      location.reload();
    }

    return 0;

  }catch(e){
    return e;
  }
}
