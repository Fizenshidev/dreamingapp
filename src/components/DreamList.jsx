import React, { useEffect, useState } from "react";
import { db, collection, query, onSnapshot, orderBy } from "../firebase/config.js";

export default function DreamList() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "dreams"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setDreams(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="dream-list">
      <h2>Mimpi Semua Orang 🌌</h2>
      {dreams.length === 0 && <p>Belum ada mimpi yang ditulis~ 😴</p>}
      <ul>
        {dreams.map((dream, i) => (
          <li key={i}>
            <strong>{dream.name}:</strong> {dream.dream}
          </li>
        ))}
      </ul>
    </section>
  );
}
