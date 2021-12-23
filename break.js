let i = 0;
outer_block: {
    inner_block:    
    while (i < 6) {
        if (i == 3) {
            break outer_block;
        }
        i += 1;
    } 
  console.log('1'); // skipped
}
console.log('2'); 