const express = require("express");
const authRoutes = require("./routes/auth.route");
var cors = require('cors')
const app = express();


// Middleware to enable CORS

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Use the auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));