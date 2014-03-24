function get_domain(url){
  /*
   * arguments: string url
   * return:    string
   */
   var result;

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
}

function create_node(link, id){
  /*
   * arguments: object link, int id
   * return:    node
   */
  var nodes = {
    "head" : document.createElement("li"),
    "span" : document.createElement("span"),
    "img"  : document.createElement("img"),
    "p"    : document.createElement("p"),
    "a"    : document.createElement("a")
  };

  nodes.span.innerHTML = id + 1;

  nodes.img.src = "http://plus.google.com/_/favicon?domain=" + get_domain(link.url);

  nodes.a.href = link.url;
  nodes.a.innerHTML = link.title;
  nodes.p.appendChild(nodes.a);

  nodes.head.className = "link";
  nodes.head.appendChild(nodes.span);
  nodes.head.appendChild(nodes.img);
  nodes.head.appendChild(nodes.p);

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
    link_node = create_node(links[i], i);
    link_container.appendChild(link_node);
  }
}

function add_link(storage){
  /*
   * arguments: object storage
   * return:    int
   */
  var links = storage.links,
      data = {},
      url,
      title;
  data = get_input(["url", "title"], ["URL", "Title"]);
  if(data.url === "" || data.title === ""){
    return 1;
  }
  links.push({
    "url" : data.url,
    "title" : data.title
  });
  return 0;
}
