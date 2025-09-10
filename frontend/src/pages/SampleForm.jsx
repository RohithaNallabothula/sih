import { useState } from "react";
import { postSample } from "../api/api";

export default function SampleForm() {
  const [form, setForm] = useState({ pH: "", turbidity: "", tds: "", nitrate: "", fluoride: "", arsenic: "", ecoli: "", lat: "", lon: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await postSample({ ...form, pH: parseFloat(form.pH), turbidity: parseFloat(form.turbidity) });
    alert("Sample submitted!");
    setForm({ pH: "", turbidity: "", tds: "", nitrate: "", fluoride: "", arsenic: "", ecoli: "", lat: "", lon: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(form).map(key => (
        <div key={key}>
          <label>{key}: </label>
          <input name={key} value={form[key]} onChange={handleChange} />
        </div>
      ))}
      <button type="submit">Submit Sample</button>
    </form>
  );
}
