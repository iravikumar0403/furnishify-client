import { Fragment } from "react";
import { useAddress } from "../context/address-context";
import { useModal } from "../context/modal-context";
import { AddressCard } from "./AddressCard";

export const SelectAddress = ({ setCurrentStep }) => {
  const { address, selectedAddress } = useAddress();
  const { showModal } = useModal();

  return (
    <Fragment>
      <h3 className="text-center">Select Delivery Address</h3>
      {address.map((addr) => (
        <AddressCard key={addr._id} address={addr} />
      ))}
      <div className="btn-group">
        <button className="btn primary mr-auto ml-2 my-3" onClick={showModal}>
          Add new
        </button>
        <button
          className="btn primary ml-auto mr-2 my-3"
          title={!selectedAddress && "No address selected"}
          disabled={!selectedAddress}
          onClick={() => setCurrentStep("summary")}
        >
          Continue
        </button>
      </div>
    </Fragment>
  );
};
