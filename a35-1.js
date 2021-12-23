
let str1 = prompt("Enter Str1");
let str2 = prompt("Enter Str2");
let result = isAnagram(str1, str2);
if (result) {
    console.log("Yeah! " + str1 + " and " +  str2 + " is an Anagram");
} else {
    console.log("Not Anagram!");
}

function isAnagram(p1, p2) {
    if (p1.length != p2.length) { 
        return false; 
    }
    var S1 = p1.toLowerCase();
    var S2 = p2.toLowerCase();
    if (S1 === S2) { return false; }

    var S1 = S1.split("");
    var S2 = S2.split("");
   
    var reOrderS1 = S1.sort().join();
    var reOrderS2 = S2.sort().join();
    console.log(reOrderS1);
    console.log(reOrderS2);
    return reOrderS1 === reOrderS2;
};