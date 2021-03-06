function EntityParser(named) {
  this.named = named;
}

var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
var CHARCODE    = /^#([0-9]+)$/;
var NAMED       = /^([A-Za-z0-9]+)$/;

EntityParser.prototype.parse = function (entity) {
  if (!entity) {
    return;
  }
  var matches = entity.match(HEXCHARCODE);
  if (matches) {
    return `&#x${matches[1]};`;
  }
  matches = entity.match(CHARCODE);
  if (matches) {
    return `&#${matches[1]};`;
  }
  matches = entity.match(NAMED);
  if (matches) {
    return this.named[matches[1]] || `&${matches[1]};`;
  }
};

export default EntityParser;
