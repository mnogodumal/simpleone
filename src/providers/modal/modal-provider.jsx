import { useCallback, useMemo, useState } from "react"
import { ModalContext } from "./modal.context"

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [setIsOpen])
  const close = useCallback(() => setIsOpen(false), [setIsOpen])

  const contextValue = useMemo(() => ({
    opened: isOpen,
    open,
    close,
  }), [close, isOpen, open])

  return (
    <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
  )
}
