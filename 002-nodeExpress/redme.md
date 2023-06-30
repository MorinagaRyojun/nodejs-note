#Node.js
การเริ่มต้นใช้งาน Node.js + Express

```Javascript
npm init -y
```
เป็นการสร้างไฟล์ Package.json สำหรับเก็บข้อมูล หรือรายละเอียดต่างๆของโปรเจค

http คือ โมดูลสำหรับควบคุม Server
```Javascript
http.createServer()
```
คำสั่งสำหรับสร้าง Server โดยสร้างการเชื่อมต่อแล้วรับส่งข้อมูลผ่าน Callback Func รับค่าเข้ามาทำงาน 2 ค่าได้แก่
- request (req) รับข้อมูลจาก User ผ่านทาง Browser มาที่ Server
- response (res) ส่งข้อมูลจาก Server กลับไปหา User
```javascript
response.write() //เขียนผลลัพท์ตอบกลับไปหา User
```
```javascript
response.end() //กำหนดจุดสิ้นสุดการรับส่งข้อมูล และสามารถกำหนดช้อความตอบกลับไปหา User
```
```javascript
listen(3000) //กำหนด PORT และสั่งให้ Web Server เริ่มรันใน PORT ที่กำหนด
```

#002- Nodmon
nodemon เป็น dependencies ตัวหนึ่งที่ใช้ในการอัพเดทโปรแกรมหรือ auto restart Node.js
เมื่อ Source code ของเรามีการเปลี่ยนแปลงเกิดขึ้น ซึ่งเมื่อ source code มีการเปลี่ยนแปลง Nodemon จะทำหน้าที่ในการ Update และ restart แล้วทำการ save โดยอัตโนมัติ ทันทีก
```
npm i nodemon --save
```
การสั่งรันแบบปกติ:
```
node index.js
```
การรันด้วยnodemon:
```
npx nodemon index.js
```
หรือ การนำไปกำหนดลงใน package.json เพื่อเรียกใช้งานให้ง่ายขึ้น
โดยให้นำไปตั้งค่าในส่วนของ "scripts":
```
"start":"nodemon ./bin/www"
หรือ
"start": "nodemon"
```
หลังจากนั้นเวลาเรียกใช้ Server จะเรียกด้วยคำสั่ง :
```
npm start
```
#002- Routing
การกำหนดเส้นทาง URL, อนุญาติการเข้าถึง, และ ตรวจสอบ URL Request

HTTP Status Code
เป็นรหัสบ่งบอกสถานะของ Request เช่น
- 200 OK (ดำเนินการเสร็จสมบูรณ์)
- 201 Create (สร้างข้อมูลใหม่เรียบร้อย)
- 400 Bad Request
- 404 Not Found (หาข้อมูลที่ Request ไม่เจอ หรือไม่สามารถใช้งานได้)
- 500 Internal Server Error (Request ถูกต้องแต่มีข้อผิดพลาดที่ฝั่ง Server)