const mongoose = require("mongoose");
const dbName = "chatroom";
mongoose
  .connect(`mongodb://localhost/:3000`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Establihsed a connection to the database!`))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
