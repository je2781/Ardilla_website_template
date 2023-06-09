const { hash } = require('bcryptjs');

const { NotFoundError } = require('../util/errors');
const { readData, writeData } = require('./util');

async function add(data) {
  const hashedPw = await hash(data.password, 12);

  const updatedData = {...data, password: hashedPw};

  await writeData(updatedData);
  return {email: data.email };
}

async function get(email) {
  const users = await readData();
  if (!users || users.length === 0) {
    throw new NotFoundError('Could not find any users.');
  }

  const user = users.find((ev) => ev.email === email);
  if (!user) {
    throw new NotFoundError('Could not find user for email ' + email);
  }

  return user;
}

exports.add = add;
exports.get = get;
