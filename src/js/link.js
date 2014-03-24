function get_domain(url){
  /*
   * arguments: string url
   * return:    string
   */
   var result;
  if(url !== null){
    if(url.match(/.*\..*\..*/)){ // *.*.* e.g. www.google.com
      result = RegExp("http:\/\/(.*)\/?").exec(url);
      if(result !== null){
        return result[1];
      }else{
        return "";
      } 
    }else if(url.match(/.*\..*/)){ // *.* e.g. google.com
      result = RegExp("http:\/\/(.*)\/?").exec(url);
      if(result !== null){
        return "www." + result[1];
      }else{
        return "";
      }
    }else{
      return "";
    }
  }else{
    return "";
  }
}

function init_link_node_button(button, text, func){
  /*
   * arguments: node button, string text, function func
   * return:    void
   */
  button.className = "button link";
  button.innerHTML = text;
  button.onclick = func;
}

function create_link_node(link, id){
  /*
   * arguments: object link, int id
   * return:    node
   */
  var nodes = {
    "head" : document.createElement("li"),
    "span" : document.createElement("span"),
    "img"  : document.createElement("img"),
    "p"    : document.createElement("p"),
    "a"    : document.createElement("a"),
    "btn_edit" : document.createElement("button"),
    "btn_delete" : document.createElement("button")
  };

  nodes.span.innerHTML = id + 1;

  nodes.img.src = "http://plus.google.com/_/favicon?domain=" + get_domain(link.url);

  nodes.a.href = link.url;
  nodes.a.innerHTML = link.title;
  nodes.p.appendChild(nodes.a);
  nodes.p.style.width = (get_window_width() - 160 * 2) + "px";

  init_link_node_button(nodes.btn_delete, "Delete", function(){
    var storage = get_storage();
    delete_link(storage, id);
    save_storage(storage);
    location.reload();
  });

  init_link_node_button(nodes.btn_edit, "Edit", function(){
    var storage = get_storage();
    edit_link(storage, id);
    save_storage(storage);
    location.reload();
  });

  nodes.head.className = "link";
  nodes.head.style.width = get_window_width() + "px";
  nodes.head.appendChild(nodes.span);
  nodes.head.appendChild(nodes.img);
  nodes.head.appendChild(nodes.p);
  nodes.head.appendChild(nodes.btn_edit);
  nodes.head.appendChild(nodes.btn_delete);

  return nodes.head;
}

function list_links(storage){
  /*
   * arguments: object storage
   * return:    void
   */
  var links = storage.links,
      link_container = document.getElementById("links"),
      link_node,
      i;

  if(links.length === 0){
    return;
  }

  link_container.innerHTML = "";

  for(i = 0; i < links.length; i++){
    link_node = create_link_node(links[i], i);
    link_container.appendChild(link_node);
  }
}

function add_link(storage){
  /*
   * arguments: object storage
   * return:    int
   */
  var links = storage.links;
  var data = get_input(["url", "title"], ["URL", "Title"], ["",""]);
  if(data.url === "" || data.title === ""){
    return 1;
  }
  links.push({
    "url" : data.url,
    "title" : data.title
  });
  return 0;
}

function delete_link(storage, id){
  /*
   * arguments: object storage, int id
   * return:    void
   */
  var links = storage.links;
  links.splice(id,1);
}

function edit_link(storage, id){
  /*
   * arguments: object storage, int id
   * return:    int
   */
  var links = storage.links;
  var data = get_input(["url", "title"], ["Enter new URL", "Enter new title"], [links[id].url, links[id].title]);
  if(data.url === "" || data.title === ""){
    return 1;
  }
  links[id] = data;
  return 0;
}
