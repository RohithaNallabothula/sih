import { useEffect, useState } from "react";
import { fetchSamples } from "../api/api";

export default function Dashboard() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    fetchSamples().then(setSamples);
  }, []);

  return (
    <div>
      <h2>Recent Water Quality Samples</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Time</th><th>pH</th><th>Turbidity</th><th>TDS</th>
            <th>Nitrate</th><th>Fluoride</th><th>Arsenic</th><th>E. coli</th>
          </tr>
        </thead>
        <tbody>
          {samples.map(s => (
            <tr key={s._id}>
              <td>{new Date(s.timestamp).toLocaleString()}</td>
              <td>{s.pH}</td>
              <td>{s.turbidity}</td>
              <td>{s.tds}</td>
              <td>{s.nitrate}</td>
              <td>{s.fluoride}</td>
              <td>{s.arsenic}</td>
              <td>{s.ecoli}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
