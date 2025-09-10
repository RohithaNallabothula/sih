import React from "react";
import { waterData } from "../data/waterData";

import Card from "../components/Card";
import Table from "../components/Table";

export default function Dashboard() {
  const latest = waterData[waterData.length - 1]; // latest entry

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">💧 Water Quality Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card title="pH" value={latest.pH} />
        <Card title="Turbidity" value={latest.turbidity} unit=" NTU" />
        <Card title="TDS" value={latest.tds} unit=" mg/L" />
        <Card title="Nitrate" value={latest.nitrate} unit=" mg/L" />
        <Card title="E. coli" value={latest.ecoli} unit=" CFU/100mL" />
      </div>

      <Table data={waterData} />
    </div>
  );
}
