import React from "react";

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 px-3">Time</th>
            <th className="py-2 px-3">Lat</th>
            <th className="py-2 px-3">Lon</th>
            <th className="py-2 px-3">pH</th>
            <th className="py-2 px-3">Turbidity</th>
            <th className="py-2 px-3">TDS</th>
            <th className="py-2 px-3">Nitrate</th>
            <th className="py-2 px-3">Fluoride</th>
            <th className="py-2 px-3">Arsenic</th>
            <th className="py-2 px-3">E. coli</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="py-2 px-3">{row.time}</td>
              <td className="py-2 px-3">{row.lat}</td>
              <td className="py-2 px-3">{row.lon}</td>
              <td className="py-2 px-3">{row.pH}</td>
              <td className="py-2 px-3">{row.turbidity}</td>
              <td className="py-2 px-3">{row.tds}</td>
              <td className="py-2 px-3">{row.nitrate}</td>
              <td className="py-2 px-3">{row.fluoride}</td>
              <td className="py-2 px-3">{row.arsenic}</td>
              <td className="py-2 px-3">{row.ecoli}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
