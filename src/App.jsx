import Galaxies from "./assets/components/Galaxies";
import { useState } from "react";
import {FaPlus, FaTrash} from "react-icons/fa"
import { MdZoomInMap} from "react-icons/md"

export default function App() {
  const [newId, setId] = useState("");
  const [newGalaxy, setNewGalaxy] = useState("");
  const [newDiamater, setNewDiamater] = useState("");
  const [id, setNextId] = useState("");
  const[name,setName]=useState("");

  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000,
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000,
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000,
    },
  ]);


  const hapusDepan = () => {
    setGalaxies(galaxies.slice(1));
  };

  const hapusBelakang = () => {
    setGalaxies(galaxies.slice(0, -1));
  };

  const hapusSemua = () => {
    setGalaxies([]);
  };

  return (
    <>
    <main>
    <div>
        {galaxies.map((v, i) => {
          return (
            <Galaxies key={i} id={v.id} nama={v.name} diameter={v.diameter} />
          );
        })}
    </div>

    <form>
        <h1>Tambah</h1>
        ID :
        <input
          type="text"
          value={newId}
          onChange={(e) =>

            setId(e.target.value)
          }
        />
        Nama :
        <input
          type="text"
          value={newGalaxy}
          onChange={(e) =>setNewGalaxy(e.target.value)}
        />
        Diameter
        <input
          type="text"
          value={newDiamater}
          onChange={(e) =>setNewDiamater(parseInt(e.target.value))}
        />
       
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies([
                { id: newId, name: newGalaxy, diameter: newDiamater },
                ...galaxies,
              ]);
            }}
          >
            <FaPlus />
            Depan
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies([
                ...galaxies,
                { id: newId, name: newGalaxy, diameter: newDiamater },
              ]);
            }}
          >
            <FaPlus />
            Belakang
          </button>
      </form>

        <form >
          <h3>Edit/Hapus Berdasarkan id</h3>
          <label>
            ID:
            <input
              type="number"
              value={id}
              onChange={(e) => setNextId(parseInt(e.target.value))}
            />
          </label>
          <label>
            Nama:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                setGalaxies(
                galaxies.map((p) =>
                    p.id === id
                      ? {
                          ...p,
                          name: name,
                        }
                      : p
                  )
                );
                setName(e.target.value);
              }}
            />
          </label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies(
                galaxies.map((p) =>
                  p.id === id
                    ? {
                        ...p,
                        diameter: p.diameter + 1000,
                      }
                    : p
                )
              );
            }}
          >
            <MdZoomInMap />
            perbesar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies(
                galaxies.map((p) =>
                  p.id === id
                    ? {
                        ...p,
                        diameter: p.diameter - 1000,
                      }
                    : p
                )
              );
            }}
          >
            <MdZoomInMap/>
            perkecil
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies(galaxies.filter((p) => p.id !== id));
            }}
          >
            <FaTrash /> Hapus
          </button>
          </form>

            <div>
            <button onClick={hapusDepan}><FaTrash/>Depan</button>
            <button onClick={hapusBelakang}><FaTrash/>Belakang</button>
            <button onClick={hapusSemua}><FaTrash/>Semua</button>
            </div>
    

    </main>
    </>
  );
}
