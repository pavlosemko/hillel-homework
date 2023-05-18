function* getPartsOfWord (string) {
    let word = '';
    let symbol = '';
   
    for (const iterator of string) {
        word += iterator;
        symbol = symbol ?? ''
        symbol = yield word + symbol;
    }
    yield word
    
  }
  
  const iterator = getPartsOfWord("hello");
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next('!'));
  console.log(iterator.next());
  console.log(iterator.next('@'));
  console.log(iterator.next());
