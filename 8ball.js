while(true) {
    console.log("คุณต้องการถามอะไร?");
    youQuiz = "My quest?";
    fRandom = Math.floor(Math.random()*5);

    array = ["ใช่","ไม่ใช่","ยังไม่แน่นอน", "ยังไม่ควรบอกคุณในตอนนี้"];
    console.log(fRandom, array[fRandom]);
}