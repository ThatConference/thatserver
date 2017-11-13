import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  phoneNumber: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('ContactInfo', schema);
