import { useReducer } from "react";
import { useAddress } from "../context/address-context";
import { useModal } from "../context/modal-context";
import { addressFormReducer } from "../reducers/formReducer";
import { updateAddress } from "../services";
import { v4 as uuid} from "uuid"

export const AddressForm = () => {
  const initialState = {
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  };
  const [formState, dispatch] = useReducer(addressFormReducer, initialState);
  const { name, phone, street, city, state, zip } = formState;
  const { hideModal } = useModal();
  const { address, setAddress, setSelectedAddress } = useAddress()

  const handleNameChange = (e) =>
    dispatch({
      type: "NAME",
      payload: e.target.value,
    });

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    console.log(isNaN(input));
    if (isNaN(input) || input.length > 10) return;
    dispatch({
      type: "PHONE",
      payload: e.target.value,
    });
  };

  const handleStreetChange = (e) =>
    dispatch({
      type: "STREET",
      payload: e.target.value,
    });

  const handleCityChange = (e) =>
    dispatch({
      type: "CITY",
      payload: e.target.value,
    });

  const handleStateChange = (e) =>
    dispatch({
      type: "STATE",
      payload: e.target.value,
    });

  const handleZipChange = (e) => {
    const input = e.target.value;
    if (isNaN(input) || input.length > 6) return;
    dispatch({
      type: "ZIP",
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      ...formState,
      _id : uuid()
    }
    setAddress(prev => [...prev, newAddress])
    setSelectedAddress(newAddress)
    updateAddress([...address, newAddress])
    hideModal()
  };

  return (
    <div className="modal open" style={{ zIndex: "100" }}>
      <div className="modal-dialog centered">
        <div className="modal-header">
          <h3> Add Address </h3>
          <button
            className="btn primary icon-only modal-close"
            onClick={hideModal}
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="px-5">
            <form onSubmit={handleSubmit}>
              <input
                className="input my-1"
                type="text"
                required
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
              />
              <input
                className="input my-1"
                type="text"
                required
                value={phone}
                onChange={handlePhoneChange}
                placeholder="9999999999"
              />
              <input
                className="input my-1"
                type="text"
                required
                value={street}
                onChange={handleStreetChange}
                placeholder="House No/Street"
              />
              <input
                className="input my-1"
                type="text"
                required
                value={city}
                onChange={handleCityChange}
                placeholder="city"
              />
              <input
                className="input my-1"
                type="text"
                required
                value={state}
                onChange={handleStateChange}
                placeholder="state"
              />
              <input
                className="input my-1"
                type="text"
                required
                value={zip}
                onChange={handleZipChange}
                placeholder="zip"
              />
              <div className="btn-group space-between my-2">
                <button type="submit" className="btn primary">
                  Save
                </button>
                <button className="btn primary outlined" onClick={hideModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
