function get_input(vars, prompts, defaults){
  /*
   * arguments: string array vars, string array prompts, string array defaults
   * return:    object
   */
  var i, arr = {};
  for(i = 0; i < vars.length; i++){
    if(typeof defaults[i] !== "undefined"){
      arr[vars[i]] = prompt(prompts[i],defaults[i]);
    }else{
      arr[vars[i]] = prompt(prompts[i]);
    }
  }
  return arr;
}
