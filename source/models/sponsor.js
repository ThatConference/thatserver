import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    unique: false,
    required: true,
  },
});

export default mongoose.model('Sponsor', schema);
