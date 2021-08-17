import useSWR from "swr";

function useAvailabilityDates(appointmentTypeID, month, calendarID) {
  const { data } = useSWR(() => {
    if (appointmentTypeID && month && calendarID) {
      return `/api/${appointmentTypeID}/${month}/${calendarID}`;
    }
    return null;
  });
  return {
    availabilityDates: data,
  };
}

export default useAvailabilityDates;
