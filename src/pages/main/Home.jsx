import MainLayout from "../../layouts/MainLayout";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <MainLayout>

      <div className="flex flex-col gap-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500">Selamat pagi,</p>
            <h2 className="text-2xl font-bold">Halo, Tri!</h2>
          </div>

          <div className="bg-[#293A61] text-white w-10 h-10 flex items-center justify-center rounded-full">
            ?
          </div>
        </div>

        <div className="bg-[#293A61] text-white p-6 rounded-2xl shadow-lg flex flex-col gap-4 max-w-xl">

  <p className="text-lg">Mau ke mana hari ini?</p>

  {/* Titik Penjemputan */}
  <div className="flex items-center bg-white text-gray-400 px-4 py-3 rounded-xl gap-3">
    <FaMapMarkerAlt className="text-blue-500" />
    <span>Pilih titik penjemputan</span>
  </div>

  {/* Tujuan */}
  <div className="flex items-center bg-white text-gray-400 px-4 py-3 rounded-xl gap-3">
    <FaMapMarkerAlt className="text-red-500" />
    <span>Pilih tujuan</span>
  </div>

  {/* Jadwal & Penumpang */}
  <div className="flex gap-3">

    <div className="flex items-center gap-2 bg-white text-gray-400 px-3 py-2 rounded-lg text-sm">
      <MdAccessTime />
      Pilih jadwal
    </div>

    <div className="flex items-center gap-2 bg-white text-gray-400 px-3 py-2 rounded-lg text-sm">
      <FaUser />
      Jumlah penumpang
    </div>

  </div>

  {/* Button */}
  <button className="bg-gray-300 text-gray-600 py-3 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
    <FiSearch />
    Cari Perjalanan
  </button>

</div>

        {/* Perjalanan Terakhir */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Perjalanan Terakhir</h3>
            <p className="text-blue-500 text-sm cursor-pointer">Hapus</p>
          </div>

          <div className="flex gap-3">

            <div className="bg-[#293A61] text-white px-4 py-3 rounded-xl text-sm">
              Pinrang → Makassar
            </div>

            <div className="bg-[#293A61] text-white px-4 py-3 rounded-xl text-sm">
              Makassar → Wajo
            </div>

          </div>
        </div>

        {/* Promo */}
        <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-md max-w-xl">
          <p className="text-sm">Diskon 50%</p>
          <h3 className="text-xl font-bold">Perjalanan Pertama</h3>

          <button className="mt-3 bg-white text-blue-600 px-4 py-2 rounded-lg">
            Klaim Sekarang
          </button>
        </div>

      </div>

    </MainLayout>
  );
}