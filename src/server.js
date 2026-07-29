import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import { User } from "./model.js";
import { Post } from "./post.js";
dotenv.config();

const app = express();

app.use(express.json());

// connect database with mongoose
await connectDB();

app.get("/mongoose", async (req, res) => {
  // create *********

  // const user = await User.create({
  //   name: "Naim 2",
  //   age: 22,
  //   email: "test7@gmail.com",
  //   role: "moderator",
  //   password: "121121",
  // });
  // res.send(user);

  // create post
  // const post = await Post.create({
  //   title: "This is Title",
  //   description: "this is my description",
  //   user: "6a6a47f6f892adb615edc0d1",
  // });

  // res.send(post);

  // const posts = await Post.find().populate("user");
  // res.send(posts);
  // get ****************
  const users = await User.find({ age: { $lt: 18 } });
  res.send(users);

  // get by id
  // const user = await User.findById("6a6a43dd1229a52ac09cfdd3");
  // console.log(user.getFullInfo());
  // res.send(user);

  // get one user
  // const user = await User.findOne({
  //   email: "test@gmail.com",
  // });

  // res.send(user);

  // update ****************
  // const id = "6a6a3f684a263582c9a1ba27";
  // const updatedUser = await User.findByIdAndUpdate(id, {
  //   name: "Updated Name",
  //   email: "change@gmail.com",
  // });

  // res.send(updatedUser);

  // delete ********
  // const deletedUser = await User.findByIdAndDelete(id);
  // res.send(deletedUser);

  // statics method
  // const user = await User.findByEmail("test4@gmail.com");
  // res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// filter
// $gte, $lte, $gt, $lt, $in