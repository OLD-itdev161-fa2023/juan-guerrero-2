import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    unique: true
  },
  players: {
    type: String,
    required: true
  }
});

const team = mongoose.model('team', teamSchema);

export default team;