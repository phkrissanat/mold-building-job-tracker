// ═══════════════════════════════════════════════════════════════════════════
// ใส่ค่า config ของคุณตรงนี้ที่เดียว ไม่ต้องแก้ไฟล์อื่นเลย
// (โปรเจกต์นี้ใช้ Firebase project แยกต่างหากชื่อ "mold building job tracker"
//  ไม่ใช่ project เดียวกับ ABS Product Manager)
// ═══════════════════════════════════════════════════════════════════════════

// 1) Firebase config — คัดลอกจาก Firebase Console ของโปรเจกต์ "mold building job tracker":
//    Project settings > General > Your apps > SDK setup and configuration
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA5fCQWzf-d-6Qz_AMl4FK0afv4fczKRy8",
  authDomain: "mold-building-job-tracker.firebaseapp.com",
  projectId: "mold-building-job-tracker",
  storageBucket: "mold-building-job-tracker.firebasestorage.app",
  messagingSenderId: "311464592481",
  appId: "1:311464592481:web:b15ceb01b43da9c53c9620"
};

// 2) เข้าสู่ระบบ (index.html): ไม่ต้องใส่อีเมล/รหัสผ่านในไฟล์นี้ — ปลอดภัยกว่าเวลา push
//    ขึ้น GitHub แบบ public repo เพราะไม่มีรหัสผ่านติดไปกับโค้ด
//    เปิดแอปครั้งแรกในแต่ละเครื่อง จะมีหน้าให้กรอกอีเมล/รหัสผ่านเอง
//    ต้องเป็นอีเมล/รหัสผ่านของบัญชีที่มีอยู่แล้วใน Firebase Authentication
//    ของโปรเจกต์นี้เท่านั้น (สร้างไว้แล้ว 1 บัญชี: phkrissanath@gmail.co...)

// 3) Owner UID — สำหรับ readonly-jobtracker.html เท่านั้น (ให้เปิดดูได้โดยไม่ต้อง login)
//    หาได้ที่ Firebase Console > Authentication > Users > คอลัมน์ "User UID"
window.MOLD_OWNER_UID = "hXiO2ntsePZLcNLZhVJFpH4bXm33";
