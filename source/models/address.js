import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  streetAddress: {
    type: String,
    required: true,
  },

  streetAddressSecondLine: {
    type: String,
  },

  city: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },

  zip: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Address', schema);
