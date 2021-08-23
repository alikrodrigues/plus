import React, { useEffect } from "react";
import { useState } from "react";

const useEventsAvailable = () => {
  const [events, setEvents] = useState<string[] | null>();

  useEffect(() => {
    findEvents();
    return () => {
      setEvents(null);
    };
  }, []);

  function findEvents() {
    const events = [
      "Quintaneja",
      "Sextaneja",
      "Sábado Free",
      "Sunset Dominguera",
    ];

    setEvents(events);
  }

  return {
    events,
  };
};

export default useEventsAvailable;
