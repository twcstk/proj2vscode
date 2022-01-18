 
function random(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}
let i = 0;
(int i = 0; i < 100; i++) { // ทำกี่รอบก็ได้ตามใจ
    i1 = random(1, 100) % 10;
    i2 = random(1, 100) % 10;
    if (i1 != i2)
      continue;
    swap(data, i1, i2); // สลับค่าข้อมูลตำแหน่ง i1 และ i2
  }
  for(int i = 0; i < 5; i++) {
    console.log (data[i]);
  }