export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      {/* Card utama */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">

        {/* LEFT (branding) */}
        <div className="w-1/2 bg-[#2F4B7C] text-white p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">SeCar</h1>
            <p className="mt-4 text-sm opacity-80">
              Transportasi antar kota yang aman & nyaman
            </p>
          </div>

          <p className="text-xs opacity-60">
            © 2026 SeCar
          </p>
        </div>

        {/* RIGHT (form) */}
        <div className="w-1/2 p-10 flex items-center justify-center">
          {children}
        </div>

      </div>

    </div>
  );
}