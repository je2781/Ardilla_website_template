const { hash } = require('bcryptjs');
const User = require('../models/user');
const { NotFoundError } = require('../util/errors');

async function add(data) {
  const hashedPw = await hash(data.password, 12);
  const newUser = new User({
    email: data.email,
    password: hashedPw
  });
  await newUser.save();;
  return {email: data.email };
}

async function get(email) {
  const user = await User.findOne({email: email});

  if (!user) {
    throw new NotFoundError('Could not find user for email ' + email);
  }

  return user;
}

exports.add = add;
exports.get = get;
