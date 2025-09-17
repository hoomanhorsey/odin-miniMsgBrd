// Import environmental variables

require("dotenv").config();

// Import dependencies
const express = require("express");
const path = require("node:path");

// Initialise app
const app = express();

// Routers required
const indexRouter = require("./routes/indexRouter");

// Configure settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Register middleware/routers
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", indexRouter);
app.use("/message", indexRouter);

// Setup port
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(
    "Note, app calls supabase hosted postgres db.  Does NOT work over public wifi as ports to connec to supabase do not work.  Adjust .env file to point to local db if using publically."
  );
});
