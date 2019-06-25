if (typeof zTool !== "object") {
    zTool = {};
}



(function () {
  /** 
    A uuidv4 generator for js to keep track of ids and objects nicely
  */
  if (typeof zTool.uuidv4 !== "function") {
    zTool.uuidv4 = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
  
  /**
    will make a nice object out of a dome elements attributes to use for state info and what not 
  */
  if (typeof zTool.getAttributes !== "function") {
    zTool.getAttributes = function (node) {
      var attributeNodeArray = Array.prototype.slice.call( node.attributes );

      return attributeNodeArray.reduce( function ( attrs, attribute ) {
          attrs[attribute.name] = attribute.value;
          return attrs;
      }, {} );
    }
  }
});
