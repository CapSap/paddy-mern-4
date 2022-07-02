import { useState } from "react";

const StoreChooser = (props) => {
  const onChange = (e) => {
    e.preventDefault();
    props.setStore(e.target.value);
  };

  const welcomeText =
    props.store === ""
      ? "Please select a store"
      : `Welcome ${props.store} team`;

  return (
    <>
      <h2>{welcomeText}</h2>

      <label htmlFor="storeChooser">Select store here: </label>
      <select
        onChange={onChange}
        id="storeChooser"
        name="storeChooser"
        defaultValue={""}
      >
        <option disabled={true} value={""}>
          Select an option{" "}
        </option>
        <option value="Canberra">Canberra - 213</option>
        <option value="Fortitude Valley">Fortitude Valley - 416</option>
        <option value="Hobart">Hobart - 710</option>
        <option value="Melbourne">Melbourne - 314</option>
        <option value="Perth">Perth - 615</option>
        <option value="Ringwood">Ringwood - 319</option>
        <option value="Seven Hills">Seven Hills - 208</option>
        <option value="Sydney">Sydney - 210</option>
      </select>
    </>
  );
};

export default StoreChooser;
