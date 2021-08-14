import GetSharedCredentials from "../../../SharedCredentials";

export default async (req, res) => {
  console.log(req.query);
  const availabilityDateResponse = await fetch(
    `https://acuityscheduling.com/api/v1/availability/dates?appointmentTypeID=${req.query.appointmentTypeID}&month=${req.query.month}&calendarID=${req.query.calendarID}&timezone=AZ`,
    GetSharedCredentials()
  );
  res.status(200).json(await availabilityDateResponse.json());
};
