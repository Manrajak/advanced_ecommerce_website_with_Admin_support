const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require('dotenv').config()


// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 
      'https://advanced-ecommerce-website-with-admin-support-haoa.vercel.app',
        'https://advanced-ecommerce-website-with-a-git-5baac4-mannrajaks-projects.vercel.app'
      ],

    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
      optionsSuccessStatus: 200
}))

// app.use((req, res, next) => {

//   // res.header("Access-Control-Allow-Origin", "https://advanced-ecommerce-website-with-admin-support-haoa.vercel.app");
//   res.header("Access-Control-Allow-Origin", req.headers.origin); // Dynamically allow any of your allowed origins

//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });


app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:5173',
    'https://advanced-ecommerce-website-with-admin-support-haoa.vercel.app',
    'https://advanced-ecommerce-website-with-a-git-5baac4-mannrajaks-projects.vercel.app'
  ];
  if (allowedOrigins.includes(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});



// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
