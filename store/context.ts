import { createContext, Dispatch, SetStateAction } from "react";

interface TidalTreksContextApiProps {
  openModalFunction: () => void;
  showlist: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setShowlist: Dispatch<SetStateAction<boolean>>;
  selectedBookings: {
    title2: string;
    description: string;
    details: string;
    rates: { adult: number; child: number };
    info: string[];
    infoTitle: string;
    options: string;
    about: string;
  };
  bookingHandler: (id: string) => void;
}
export const TidalTreksContextAPI = createContext<TidalTreksContextApiProps>({
  openModalFunction: () => {},
  showlist: false,
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  setShowlist: () => {},
  selectedBookings: {
    title2: "",
    description: "",
    details: "",
    rates: { adult: 0, child: 0 },
    info: [],
    infoTitle: "",
    options: "",
    about: "",
  },
  bookingHandler: (_id: string) => {},
});
