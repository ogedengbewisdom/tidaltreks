import PrivateEvents from "../screens/PrivateEvents";
import { useLoaderData } from "react-router-dom";
import { EVENTVENUE } from "../utils/formatDate";

const PrivateEventsPage = () => {
  const events = useLoaderData();

  return <PrivateEvents events={events} />;
};

export const privateEventsLoader = async () => {
  const response = EVENTVENUE;
  return response;
};
export default PrivateEventsPage;
