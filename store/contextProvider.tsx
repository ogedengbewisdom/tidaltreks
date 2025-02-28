import { ReactNode, useCallback, useState } from "react";
import { TidalTreksContextAPI } from "./context";
import { useDisclosure } from "@chakra-ui/react";
import { BOOKINGS } from "../src/utils/formatDate";
import { BookingsProps } from "../src/utils/interface";

interface TidalTreksContextApiProps {
  children: ReactNode;
}

const TidalTrekContextProvider = ({ children }: TidalTreksContextApiProps) => {
  const [showlist, setShowlist] = useState<boolean>(false);
  const [selectedBookings, setSelectedBookings] = useState<BookingsProps>({
    title2: "",
    description: "",
    details: "",
    rates: { adult: 0, child: 0 },
    info: [],
    infoTitle: "",
    options: "",
    about: "",
  });

  const bookingDetail = useCallback(
    (id: string) => {
      return BOOKINGS.find((project) => project.id === id);
    },
    [BOOKINGS]
  );

  const bookingHandler = (id: string) => {
    const booking = bookingDetail(id);
    if (booking) {
      setShowlist(false);
      onOpenBookModal();
      setSelectedBookings((prev) => ({ ...prev, ...booking }));
    }
  };

  const {
    isOpen: isOpenBookModal,
    onOpen: onOpenBookModal,
    onClose: onCloseBookModal,
  } = useDisclosure();

  const openModalFunction = () => {
    setShowlist(true);
    onOpenBookModal();
  };
  const contextValue = {
    showlist: showlist,
    selectedBookings,
    bookingHandler,
    openModalFunction: openModalFunction,
    isOpen: isOpenBookModal,
    onOpen: onOpenBookModal,
    onClose: onCloseBookModal,
    setShowlist: setShowlist,
  };
  return (
    <TidalTreksContextAPI.Provider value={contextValue}>
      {children}
    </TidalTreksContextAPI.Provider>
  );
};

export default TidalTrekContextProvider;
