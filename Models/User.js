const { Schema, model } = require('mongoose');

const users = new Schema({
  regularClasses: {
    Monday: [{ startTime: String, endTime: String }],
    Tuesday: [{ startTime: String, endTime: String }],
    Wednesday: [{ startTime: String, endTime: String }],
    Thursday: [{ startTime: String, endTime: String }],
    Friday: [{ startTime: String, endTime: String }],
    Saturday: [{ startTime: String, endTime: String }],
    Sunday: [{ startTime: String, endTime: String }],
  },
  notRegularClasses: [{ time: Date, duration: String, name: String }],
});

module.exports = model('users', users);
