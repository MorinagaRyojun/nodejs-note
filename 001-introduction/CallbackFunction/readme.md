## Callback function
โดยปกติแล้ว JavaScript ทำงานเป็นแบบ Non blocking io หรือการทำงานโดยไม่หยุดรอให้งานเสร็จก่อนค่อยทำต่อ ทำให้ในบางครั้งงานที่ต้องรอทำให้เสร็จถูกข้ามไป แล้วลำดับโปรแกรมผิดจากที่ตั้งใจจึงต้องมีการใช้งาน Callback function
Callback function คือฟังก์ชันที่ถูกส่งเป็นพารามิเตอร์ของฟังก์ชันอื่นเพื่อเรียกใช้งานในภายหลัง ฟังก์ชัน Callback นั้นมีประโยชน์เมื่อเราสร้างฟังก์ชันและต้องการให้ส่วนที่เรียกใช้งานฟังก์ชันสามารถกำหนดการทำงานบางอย่างเองได้ โดยการทำงานนั้นจะกำหนดผ่านฟังก์ชัน Callback

โค้ดที่กำหนดมานี้เป็นตัวอย่างการใช้งานของฟังก์ชัน callback ในภาษา JavaScript เพื่อจำลองการทำงานแบบ asynchronous มาดูกันครับ:

การประกาศตัวแปร URL:

```javascript
const url1 = "Ryojun.space/file1.json";
const url2 = "Ryojun.space/file2.json";
const url3 = "Ryojun.space/file3.json";
```
ตัวแปรเหล่านี้ใช้เก็บ URL ของไฟล์ที่ต้องการดาวน์โหลดทั้งสามไฟล์.

การกำหนดฟังก์ชัน simulateCall:

```javascript
function simulateCall(x, y, callback) {
  console.log("LOADING...");
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 5000);
}

```
ฟังก์ชันนี้รับพารามิเตอร์ที่เป็นตัวเลขสองตัว x และ y รวมถึงฟังก์ชัน callback เป็นพารามิเตอร์ด้วย ฟังก์ชันนี้จะจำลองการทำงานแบบ asynchronous โดยรอเวลา 5 วินาทีด้วย setTimeout หลังจากนั้นจะทำการคำนวณผลรวมของ x และ y และเรียกใช้งานฟังก์ชัน callback โดยส่งผลรวมที่คำนวณได้เป็นอาร์กิวเมนต์

การกำหนดฟังก์ชัน display เพื่อสร้าง Func ทดสอบการแสดงผล:

```javascript
function display(result) {
  console.log("ผลลัพธ์คือ:", result);
}

```

เรียกใช้งาน simulateCall พร้อมกับ callback:
```javascript
simulateCall(1, 1, display);
```
บรรทัดนี้เรียกใช้ฟังก์ชัน simulateCall โดยส่งตัวเลข 1 และ 1 เป็นอาร์กิวเมนต์ และยังระบุฟังก์ชัน display เป็น callback ผลลัพธ์ที่ได้คือจะแสดงคำว่า "กำลังโหลด..." ทันที และหลังจากผ่านไป 5 วินาทีจะแสดงผลลัพธ์คือ "ผลลัพธ์คือ: 2" ในคอนโซล.

วิธีการเรียกใช้งานอื่นๆ โดยใช้ฟังก์ชันแบบ arrow function:
```javascript
simulateCall(1, 1, (result) => {
  console.log("ผลลัพธ์คือ:", result);
});
```
โค้ดนี้เป็นตัวอย่างของวิธีการส่ง callback โดยใช้ฟังก์ชันแบบ arrow function โดยตรงในการเรียกใช้งาน simulateCall.
