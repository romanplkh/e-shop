import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

export const WithSpinner = InnerComponent => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <InnerComponent {...props} />
    );
  };

  return Spinner;
};

export default WithSpinner;
