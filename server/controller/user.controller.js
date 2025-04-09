const User = require("../models/user.model");

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

// List all users (Admin functionality)
const listUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    const formattedUsers = users.map(user => ({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }));
    res.status(200).json({ users: formattedUsers });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUser,
  listUsers
};