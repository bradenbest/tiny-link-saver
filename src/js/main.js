function main(){
  var storage = get_storage();
  var init_events_exit;

  list_links(storage);

  init_events_exit = init_events();
  if( init_events_exit ){
    console.log("An error occurred in init_events(). That means buttons won't work!");
    console.log("The error reported is: " + init_events_exit);
  }
}

window.onload = main;
