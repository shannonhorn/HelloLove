import GetSharedCredentials from "../../../SharedCredentials";

export default async (req, res) => {
  // fetch availability dates
  const availabilityDateResponse = await fetch(
    `https://acuityscheduling.com/api/v1/availability/dates?appointmentTypeID=${req.query.appointmentTypeId}&month=${req.query.month}&calendarID=${req.query.calendarID}`,
    GetSharedCredentials()
  );
  res.status(200).json(await availabilityDateResponse.json());
};
