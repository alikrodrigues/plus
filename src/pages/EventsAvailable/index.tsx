import { withHook } from "../../utils/withHook";
import EventsAvailableView, {
  EventAvailableViewProps,
} from "./EventsAvailableView";
import useEventsAvailable from "./useEventsAvailable";

const EventsAvailable: React.ReactNode = withHook<
  void,
  EventAvailableViewProps
>(useEventsAvailable, EventsAvailableView);

export default EventsAvailable;
