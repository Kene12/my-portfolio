export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        {/* รูปโปรไฟล์ */}
        <img
          src="/me.jpg"
          alt="My Profile"
          className="w-40 h-40 rounded-full mx-auto border-4 border-gray-300 shadow-lg"
        />

        {/* ข้อความแนะนำตัว */}
        <h1 className="text-4xl font-bold mt-4">สวัสดี, ฉันคือ [ชื่อของคุณ] 👋</h1>
        <p className="text-lg text-gray-600 mt-2">
          ฉันเป็น [ตำแหน่งของคุณ] ที่สนใจเกี่ยวกับ [เทคโนโลยีที่คุณใช้]  
        </p>
      </div>
    </main>
  );
}
