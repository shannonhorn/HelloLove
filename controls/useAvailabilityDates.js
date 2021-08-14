import useSWR from "swr";

function useAvailabilityDates(appointmentTypeID, month, calendarID) {
  console.log(appointmentTypeID);
  console.log(month);
  console.log(calendarID);
  const { data } = useSWR(
    () => `/api/${appointmentTypeID}/${month}/${calendarID}`
  );
  return {
    availabilityDates: data
  };
}

export default useAvailabilityDates;
