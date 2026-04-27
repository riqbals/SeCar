import MainLayout from "../../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

export default function HasilPerjalanan() {
  const navigate = useNavigate();

  const drivers = [
    {
      name: "Budi Santoso",
      car: "Toyota Hiace - Putih",
      price: 160000,
      start: "08:00",
      end: "13:00",
      duration: "5j 0m",
      from: "Makassar",
      to: "Pinrang",
      seats: 3,
      rating: 4.8,
    },
    {
      name: "Rezki Ahmad",
      car: "Toyota Kijang Innova - Silver",
      price: 130000,
      start: "13:30",
      end: "18:00",
      duration: "4j 30m",
      from: "Makassar",
      to: "Pinrang",
      seats: 7,
      rating: 4.8,
    },
    {
      name: "Agus Setiawan",
      car: "Toyota Kijang Innova",
      price: 130000,
      start: "16:00",
      end: "20:00",
      duration: "4j 0m",
      from: "Makassar",
      to: "Pinrang",
      seats: 2,
      rating: 4.7,
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">

        {/* HEADER */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)}>←</button>
          <div>
            <h2 className="font-bold text-lg">Makassar → Pinrang</h2>
            <p className="text-xs text-gray-400">
              Senin, 12 Jan • 1 Penumpang
            </p>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex gap-2">
          <button className="bg-[#3868D5] text-white px-3 py-1 rounded-lg text-sm">
            Termurah
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
            Tercepat
          </button>
          <button className="bg-gray-200 px-3 py-1 rounded-lg text-sm">
            Pagi
          </button>
        </div>

        {/* LIST DRIVER */}
        {drivers.map((d, i) => (
          <div
            key={i}
            className="bg-[#293A61] text-white p-4 rounded-2xl shadow-md flex flex-col gap-3"
          >
            {/* TOP */}
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">{d.name}</h3>
                <p className="text-xs opacity-70">{d.car}</p>
                <p className="text-yellow-400 text-xs">⭐ {d.rating}</p>
              </div>

              <div className="text-right">
                <p className="font-bold">Rp {d.price.toLocaleString()}</p>
                <p className="text-xs opacity-70">Per Kursi</p>
              </div>
            </div>

            {/* TIME */}
            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="font-bold">{d.start}</p>
                <p className="text-xs">{d.from}</p>
              </div>

              <div className="text-xs opacity-70">
                {d.duration}
              </div>

              <div className="text-right">
                <p className="font-bold">{d.end}</p>
                <p className="text-xs">{d.to}</p>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center">
              <span className="bg-orange-500 text-xs px-2 py-1 rounded">
                Sisa {d.seats} Kursi
              </span>

              <button
                onClick={() => navigate("/detail")}
                className="bg-[#3868D5] px-4 py-1 rounded-lg text-sm"
              >
                Pilih →
              </button>
            </div>
          </div>
        ))}

      </div>
    </MainLayout>
  );
}