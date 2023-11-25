import React, { useState } from "react";
import "./Diseases.css"
const Diseases = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [diseaseData] = useState([
    { id: 1, name: "Hypertension", medicines: ["Medicine A", "Medicine B"] },
    { id: 2, name: "Diabetes", medicines: ["Medicine C", "Medicine D"] },
    { id: 3, name: "Arthritis", medicines: ["Medicine E", "Medicine F"] },
    { id: 4, name: "Osteoporosis", medicines: ["Medicine G", "Medicine H"] },
    { id: 5, name: "Heart Disease", medicines: ["Medicine I", "Medicine J"] },
    // Add more diseases and their medicines as needed
  ]);

  const handleCheckboxChange = (e) => {
    const selectedDisease = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedDiseases([...selectedDiseases, selectedDisease]);
    } else {
      const updatedSelected = selectedDiseases.filter(
        (disease) => disease !== selectedDisease,
      );
      setSelectedDiseases(updatedSelected);
    }
  };

  return (
    <div>
      <h2>Select Diseases and Medicines for 65+ Individuals:</h2>
      <table>
        <thead>
          <tr>
            <th>Disease</th>
            {/* <th>Medicines</th> */}
          </tr>
        </thead>
        <tbody>
          {diseaseData.map((disease) => (
            <tr key={disease.id}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    value={disease.name}
                    onChange={handleCheckboxChange}
                  />{" "}
                  {disease.name}
                </label>
              </td>
              {/* <td>{disease.medicines.join(", ")}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDiseases.length > 0 && (
        <div>
          <h3>Selected Diseases:</h3>
          <ul>
            {selectedDiseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
          <h3>Medicines for Selected Diseases:</h3>
          <ul>
            {diseaseData
              .filter((disease) => selectedDiseases.includes(disease.name))
              .map((disease) => (
                <li key={disease.id}>
                  {disease.name}: {disease.medicines.join(", ")}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diseases;
