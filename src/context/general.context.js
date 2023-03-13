import React, { useState, useEffect } from "react";

const GeneralContext = React.createContext();

function GeneralProviderWrapper(props) {

  return (
    <GeneralContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
}

export { GeneralProviderWrapper, GeneralContext };
