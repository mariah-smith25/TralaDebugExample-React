import { useState } from "react";

function LlamaForm(props) {
  const [formData, setFormData] = useState(props.data);
  const [hasChanges, setHasChanges] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    setHasChanges(false);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setFormData(props.data);
    setHasChanges(false);
  };

  const handleFormChange = (updatedData) => {
    setHasChanges(true);
    setFormData(updatedData);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email ? formData.email : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, email: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={formData.first_name ? formData.first_name : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, first_name: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Middle Initial:
        <input
          type="text"
          name="middle_initial"
          value={formData.middle_initial ? formData.middle_initial : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, middle_initial: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={formData.last_name ? formData.last_name : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, last_name: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone_number"
          value={formData.phone_number ? formData.phone_number : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, phone_number: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Country Code:
        <input
          type="text"
          name="country_code"
          value={formData.country_code ? formData.country_code : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, country_code: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Birthday:
        <input
          type="date"
          name="birth_date"
          value={formData.birth_date ? formData.birth_date : ""}
          onChange={(e) =>
            handleFormChange({ ...formData, birth_date: e.target.value })
          }
        />
      </label>
      <br />
      <button type="submit" disabled={!hasChanges}>
        Save
      </button>
      <button type="reset">Cancel</button>
    </form>
  );
}

export default LlamaForm;
