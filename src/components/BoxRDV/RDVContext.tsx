import { createContext, useContext, useState, useMemo } from "react";
import type { PropsWithChildren, Dispatch, SetStateAction } from "react";

type RDVContextValue = {
  client?: string;
  handleClientChange: Dispatch<SetStateAction<string>>;
};

const RDVContext = createContext<RDVContextValue | null>(null);
export const useRDVContext = () => useContext(RDVContext) as RDVContextValue;

export function RDVProvider({ children }: PropsWithChildren) {
  const [client, setClient] = useState("");

  const value = useMemo(
    () => ({
      client,
      handleClientChange: setClient,
    }),
    [client]
  );

  return <RDVContext.Provider value={value}>{children}</RDVContext.Provider>;
}
