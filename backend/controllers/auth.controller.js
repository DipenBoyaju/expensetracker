import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const expireTime = 3600000;

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;


  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        status: 'error',
        message: 'User already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expireTime })

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: expireTime
    })

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully'
    });

  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Server error'
    })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ststus: 'error',
        message: 'Invalid Credentials'
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        ststus: 'error',
        message: 'Invalid Credentials'
      })
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expireTime })

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: expireTime,
    })

    res.status(200).json({
      status: 'success',
      message: 'Login Successful'
    });

  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Server error'
    });
  }
}

export const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    status: 'success',
    message: 'Logout Successful'
  })
}