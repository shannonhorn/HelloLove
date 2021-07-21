import GetSharedCredentials from "./SharedCredentials";

export default async (req, res) => {
  // fetch appointment types
  const appointmentTypeResponse = await fetch(
    `https://acuityscheduling.com/api/v1/appointment-types`,
    GetSharedCredentials()
  );
  res.status(200).json(await appointmentTypeResponse.json());
};
