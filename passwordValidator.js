let iPwd = "ABCDEFGH#";

if (iPwd.length < 8 ) {
    console.log("IN if block"); 
    // numeric only 
    if (isFinite(iPwd)) {
        console.log("very week");
    // } else if (/^[A-Za-zก-ฮ]+$/.test(iPwd)) {
    //     console.log("weak")
    } else if (!iPwd.includes("0") &&
               !iPwd.includes("1") &&
               !iPwd.includes("2") &&
               !iPwd.includes("3") &&
               !iPwd.includes("4") &&
               !iPwd.includes("5") &&
               !iPwd.includes("6") &&
               !iPwd.includes("7") &&
               !iPwd.includes("8") &&
               !iPwd.includes("9") ) {
                console.log("weak") 
               }
     
} else {
    console.log("IN else block");   
    // Must have both which at least one numeric or one alphabet 
    if ( (/[0-9]/.test(iPwd)) && (/[a-zA-Z]/.test(iPwd)) ) {
        // Must have special character
        if ((/[~!@#$%^&*()\/?"\]\[]/.test(iPwd))) {
            console.log("very strong");
        } else {
            console.log("strong");
        }
        
    } 
    
}
