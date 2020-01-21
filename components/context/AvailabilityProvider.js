import { createContext, useState, useContext } from "react";

const AvailabilityContext = createContext();

const AvailabilityContextProvider = AvailabilityContext.Provider;

function AvailabilityProvider({ children }) {
  const { currentAvailability, getCurrentAvailability } = useContext(
    AuthContext
  );
  const [Availability, setAvailability] = useState({
    Availability: data
  });

  function getAvailability() {
    setAvailability({
      Availability: data
    });
  }

  return (
    <AvailabilityContextProvider value={{ Availability: null }}>
      {children}
    </AvailabilityContextProvider>
  );
}

export {
  AvailabilityProvider,
  AvailabilityContext,
  AvailabilityContextProvider
};
