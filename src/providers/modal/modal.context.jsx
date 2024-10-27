import { createContext, useContext } from "react";

export const ModalContext = createContext(null)

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('ERROR: use context only as descendant')
  }

  return context
}