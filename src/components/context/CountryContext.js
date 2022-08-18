import React, { createContext, useState } from "react";
export const CountryContext = createContext();

export const CountryProvider = (props) => {
  const [country, setCountry] = useState("");

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};
