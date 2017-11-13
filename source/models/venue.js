import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
});

export default mongoose.model('Venue', schema);
