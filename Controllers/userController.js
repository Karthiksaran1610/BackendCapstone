import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utils/Error.js";
import User from "../Models/userModel.js";
import Listing from "../Models/listing.model.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You are not allowed to update this user"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password must be at least 6 characters long")
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length < 16) {
      return next(
        errorHandler(400, "Username must be between 7 and 16 characters")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "Username must not contain any spaces"));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(
        errorHandler(400, "Username must contain only lowercase letters")
      );
    }
    if (!req.body.username.match(/^[A-Za-z0-9 ]+$/)) {
      return next(
        errorHandler(
          400,
          "Username must contain only alphanumeric characters and spaces"
        )
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      {
        new: true, //save the new user detail
      }
    );
    const { password, ...rest } = updatedUser._doc; //hashed password
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(403, "You are not allowed to delete this user"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const { password: password, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
