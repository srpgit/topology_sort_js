function topology_sort(arr, getInfo) {
  if (!arr || !arr.length || !typeof getInfo == "function") {
    return nodes;
  }

  var nodes = arr.map((item) => {
    var info = getInfo(item);
    return {
      id: info.id,
      deps: info.deps || [],
      node: item,
    };
  });

  function find_independent_node(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var node_id = node.id;
      var relied = false;
      for (var j = 0; j < nodes.length; j++) {
        var node_inner = nodes[j];
        if (node_inner.deps.indexOf(node_id) != -1) {
          relied = true;
          break;
        }
      }
      if (!relied) {
        return node;
      }
    }
  }

  var result = [];
  var node = null;
  while ((node = find_independent_node(nodes))) {
    result.push(node.node);
    nodes.splice(nodes.indexOf(node), 1);
  }

  if (nodes.length) {
    throw "circulation dependency";
  }

  return result.reverse();
}
