import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
    },
    age: {
      type: Number,
      min: 18,
      max: 60,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "user", "moderator"],
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// methods instance methods
userSchema.methods.getFullInfo = function () {
  return `${this.name} - ${this.age} - ${this.role} - ${this.email}`;
};

// static methods
userSchema.statics.findByEmail = async function (email) {
  return await this.findOne({ email });
};

// middleware
userSchema.pre("save", async function () {
  console.log("I am preee middleware");
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.post("save", async function () {
  console.log("I will print after save...");
});

export const User = mongoose.model("User", userSchema);

// data types mongoose
// string, number, boolean, date, array, objectId, object

// validation
// required, unique, min, max, minLength, maxLength, enum



