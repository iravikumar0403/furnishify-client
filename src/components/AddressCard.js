import { useAddress } from "../context/address-context";

export const AddressCard = ({ address }) => {
  const { _id, name, phone, street, city, state, zip } = address;
  const { selectedAddress, setSelectedAddress } = useAddress(null);

  return (
    <label className="card card-horizontal my-1 mx-2 align-center">
      <div className="card-body">
        <h4 className="card-title">
          {name}, {phone}
        </h4>
        <p className="card-text">{street}</p>
        <p className="card-text">
          {city}, {state} - {zip}
        </p>
      </div>
      <input
        className="ml-auto mr-3"
        type="radio"
        name="address"
        checked={selectedAddress?._id === _id}
        onChange={() => setSelectedAddress(address)}
      />
    </label>
  );
};
