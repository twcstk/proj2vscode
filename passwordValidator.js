let iPwd = "ABCDEFGH12345";

if (iPwd.length < 8 ) {
    console.log("IN if block"); 
     
} else { 
    console.log("IN else block");   
    // Must have both which at least one numeric or one alphabet 
    if ( (/[0-9]/.test(iPwd)) && (/[a-zA-Z]/.test(iPwd)) ) {
        // Must have special character
        if ((/ [ ~!@#$%^&*()\/?"\]\[ ] /.test(iPwd))) {
            console.log("very strong");
        } else {
            console.log("strong");
        }
        
    } 
    
}
