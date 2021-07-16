const AcuityScheduling = require("acuityscheduling");

const acuity = Acuity.basic({
  userId: process.env.ACUITY_USER_ID,
  apiKey: process.env.ACUITY_API_KEY,
});

export default acuity.request("products", (err, res, products) => {
  if (err) {
    return console.error(err);
  }
  console.log(products);
});

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }