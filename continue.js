let i = 0;
outer_block: 
for (let index = 0; index < 10; index++) {
    inner_block:    
    while (i < 6) {
        if (i == 6) {
            continue outer_block;
        }
        i += 1;
        console.log(" i = " + i);
    }
    console.log('index = ' + index ); // skipped 
} 