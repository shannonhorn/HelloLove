const GetSharedCredentials = () => {
  // shared authorization key
  const key = Buffer.from(
    `${process.env.ACUITY_USER_ID}:${process.env.ACUITY_API_KEY}`
  );
  const encodedCredentials = key.toString("base64");
  return {
    headers: { Authorization: `Basic ${encodedCredentials}` },
  };
};

export default GetSharedCredentials;
