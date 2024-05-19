const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <p>id: 65130695</p>
    <a href="/">MyHome</a>
    <a href="/myresearch">MyResearch</a>
    <a href="/My_Research_Plan">My Research Plan</a>
    <a href="/rest/researchplan/">rest researchplan</a>
    <p>name: kittinun roonsungneon</p>
    <div>
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/434344300_25220897940889677_3538996623121010858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8TVIEGg_eloQ7kNvgExAYtt&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYDnFbTxazMITRSdMuyzufKU5ED_j2byJXb9HC1Mxnmt0w&oe=664F7D58" 
    alt="bas" width="300" height="300">
    </div>
  `);
});

app.get("/myresearch", (req, res) => {
  res.send(`
    <p>เนื่องจากการสร้างเว็บไซต์สมัยนี้ มีการพัฒนาที่เป็นทั้งแบบ Front-end และ Back-end และเฟรมเวิร์คที่พัฒนาด้าน Front-end มีหลากหลายเจ้าไม่ว่าจะเป็น vuejs reactjs angularjs 
    เลยเป็นที่มาของการทำการทำสอบประสิทธิภาพ Frontend framework ในการจัดการ DOM 
    การทดสอบความสามารถในการจัดการ DOM เป็นขั้นตอนสำคัญในการพัฒนาแอปพลิเคชันเว็บ เนื่องจากการจัดการ DOM มีผลต่อประสิทธิภาพและประสิทธิภาพของแอปพลิเคชัน และมีผลต่อประสิทธิภาพการทำงานของ Frontend Frameworks ด้วยการทดสอบความสามารถในการจัดการ DOM ช่วยให้ผู้พัฒนาสามารถตรวจสอบความถูกต้องและประสิทธิภาพของโค้ดที่ใช้ในการจัดการ DOM ได้อย่างมีประสิทธิภาพปัญหาที่เกี่ยวข้องที่สำคัญคือความแตกต่างในการจัดการ DOM ระหว่าง Frontend Frameworks ที่สามารถมีผลต่อประสิทธิภาพของแอปพลิเคชันและประสิทธิภาพในการทำงานของ Frontend Frameworks ด้วย
    </p>
    <a href="/">MyHome</a>
    <a href="/myresearch">MyResearch</a>
  `);
});

app.get("/My_Research_Plan", (req, res) => {
  res.send(`
  <h2>My_Research_Plan</h2>
<table border="1" style="border-collapse: collapse">
  <tr>
    <th></th>
    <th colspan="5">เดือน</th>
  </tr>
  <tr>
    <th>ขั้นตอน</th>
    <th>พฤษภาคม</th>
    <th>มิถุนายน</th>
    <th>กรกฎาคม</th>
    <th>สิงหาคม</th>
    <th>ตุลาคม</th>
  </tr>
  <tr>
    <td>literature review</td>
    <td style="text-align: center;">&#10004;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>บทที่ 1 บทนำ</td>
    <td style="text-align: center;">&#10004;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>บทที่ 2 แนวคิด ทฤษฎี และงานวิจัยที่เกี่ยวข้อง</td>
    <td style="text-align: center;">&#10004;</td>
    <td style="text-align: center;">&#10004;</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>บทที่ 3 ระเบียบวิธีวิจัย</td>
    <td></td>
    <td style="text-align: center;">&#10004;</td>
    <td style="text-align: center;">&#10004;</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>บทที่ 4 ผลการวิจัย</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align: center;">&#10004;</td>
    <td></td>
  </tr>
  <tr>
    <td>บทที่ 5 สรุปผลการวิจัย อภิปรายผล และข้อเสนอแนะ</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align: center;">&#10004;</td>
    <td style="text-align: center;">&#10004;</td>
  </tr>
</table>
<a href="/">MyHome</a>
<a href="/myresearch">MyResearch</a>
  `);

});
app.get("/rest/researchplan/", (req, res) => {
  res.send(`{
    "หัวข้อ": "My_Research_Plan",
    "แผนงาน": [
      {
        "ขั้นตอน": "บทที่ 1 บทนำ",
        "วันที่เริ่ม": "01-05-67",
        "วันที่สิ้นสุด": "12-05-67"
      },
      {
        "ขั้นตอน": "บทที่ 2 แนวคิด ทฤษฎี และงานวิจัยที่เกี่ยวข้อง",
        "วันที่เริ่ม": "13-05-67",
        "วันที่สิ้นสุด": "13-05-67"
      },
      {
        "ขั้นตอน": "บทที่ 3 ระเบียบวิธีวิจัย",
        "วันที่เริ่ม": "01-06-67",
        "วันที่สิ้นสุด": "30-07-67"
      },
      {
        "ขั้นตอน": "บทที่ 4 ผลการวิจัย",
        "วันที่เริ่ม": "01-08-67",
        "วันที่สิ้นสุด": "21-08-67"
      },
      {
        "ขั้นตอน": "บทที่ 5 สรุปผลการวิจัย อภิปรายผล และข้อเสนอแนะ",
        "วันที่เริ่ม": "22-08-67",
        "วันที่สิ้นสุด": "21-09-67"
      }
    ]
  }`);
});

app.listen(8080);