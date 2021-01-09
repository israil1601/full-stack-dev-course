import React from "react";

const PersonForm = ({
  handleSubmit,
  handleInput,
  handleNumber,
  newName,
  newPhone,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleInput} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
