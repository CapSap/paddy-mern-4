import { useState } from "react";

const StoreChooser = () => {
  const [store, setStore] = useState();

  const onchange = () => {};

  return (
    <>
      <div>
        <h2>Select Your store:</h2>
      </div>
      <select>
        <option>Select an option</option>
        <option>Seven Hills</option>
        <option>Sydney</option>
      </select>
    </>
  );
};

export default StoreChooser;
