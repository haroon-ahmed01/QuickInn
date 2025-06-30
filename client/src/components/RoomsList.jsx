import React, { useState } from "react";
import roomsData from "../data/room";

const RoomsList = () => {
  const [filter, setFilter] = useState({ type: "", ac: "" });

  const filteredRooms = roomsData.filter(room => {
    const typeMatch = filter.type ? room.type === filter.type : true;
    const acMatch = filter.ac === "" ? true : room.ac === (filter.ac === "true");
    return typeMatch && acMatch;
  });

  const getPrice = (type) => (type === "Single" ? 1000 : 2000);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Rooms</h2>

      {/* Filter Section */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
          <option value="">All Beds</option>
          <option value="Single">Single Bed</option>
          <option value="Double">Double Bed</option>
        </select>

        <select onChange={(e) => setFilter({ ...filter, ac: e.target.value })}>
          <option value="">All AC/Non-AC</option>
          <option value="true">AC</option>
          <option value="false">Non-AC</option>
        </select>
      </div>

      {/* Rooms Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {filteredRooms.map(room => (
          <div key={room.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px" }}>
            <img
              src={room.image}
              alt={`Room ${room.id}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{room.type} Bed</h3>
            <p>{room.ac ? "AC" : "Non-AC"}</p>
            <p>Price: ₹{getPrice(room.type)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
