const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const UpcomingEvent = mongoose.model("UpcomingEvent", eventSchema);

module.exports = UpcomingEvent;
