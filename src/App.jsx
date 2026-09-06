import React from "react";
import Greetings from "./assets/props/Greetings";

const mahasiswa = [
  {
    id: 1,
    nama: "Isal",
    umur: 21,
    alamat: "Airmadidi",
    jurusan: "Sistem Informasi",
  },
  {
    id: 2,
    nama: "Inzagi",
    umur: 21,
    alamat: "Manado",
    jurusan: "Informatika",
  },
  {
    id: 3,
    nama: "Maria",
    umur: 22,
    alamat: "Tomohon",
    jurusan: "Sistem Informasi",
  },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Mahasiswa</h1>

      {mahasiswa.map((mhs) => (
        <Greetings
          key={mhs.id}
          nama={mhs.nama}
          umur={mhs.umur}
          alamat={mhs.alamat}
          jurusan={mhs.jurusan}
        />
      ))}
    </div>
  );
}

export default App;