const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1212599",
  key: "143d3bcb62381ecea9b9",
  secret: "75eba6f9eadbf425d3dd",
  cluster: "ap1",
  useTLS: true,
});
const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(express.json());

app.post("/api/messages", async (req, res) => {
  await pusher.trigger("my-channel", "message", {
    username: req.body.username,
    message: req.body.message,
  });

  res.json([]);
});

app.listen(8000, () => {
  console.log(`Server started on port 8000`);
});
