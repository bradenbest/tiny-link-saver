function get_input(vars, prompts){
  /*
   * arguments: string array vars, string array prompts
   * return:    object
   */
  var i, arr = {};
  for(i = 0; i < vars.length; i++){
    arr[vars[i]] = prompt(prompts[i]);
  }
  return arr;
}
