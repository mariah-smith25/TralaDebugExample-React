import { isBirthdayMonth } from "../../models/BirthdayDetector";

function LLamaSheet({ llamaRecords, onEditClick, onDeleteClick }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>M.I.</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>Country Code</th>
          <th>Phone No.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {llamaRecords.map((llama) => {
          let date = new Date(llama.birth_date);
          let formattedDate = llama.birth_date
            ? date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            : "-";

          return (
            <tr
              key={llama.id}
              className={isBirthdayMonth(date) ? "highlighted" : ""}
            >
              <td>{llama.email}</td>
              <td>{llama.first_name}</td>
              <td>{llama.middle_initial}</td>
              <td>{llama.last_name}</td>
              <td>{formattedDate}</td>
              <td>{llama.country_code}</td>
              <td>{llama.phone_number}</td>
              <td>
                <button onClick={() => onEditClick(llama.id)}>Edit</button>
                <button onClick={() => onDeleteClick(llama.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default LLamaSheet;
