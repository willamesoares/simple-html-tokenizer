import Tokenizer from './tokenizer';
import EntityParser from './entity-parser';
import HTML5NamedCharRefs from './html5-named-char-refs';

export default function tokenize(input, options) {
  var tokenizer = new Tokenizer(new EntityParser(HTML5NamedCharRefs), options);
  return tokenizer.tokenize(input);
}
