import mongoose from 'mongoose';

const Schema = mongoose;

const sessionSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  address: {
    type: Schema.Types.ObjectId, // todo.. can this be an embeded doc and not just the id?
    ref: 'Address',
  },

  contactInfo: {
    type: Schema.Types.ObjectId, // todo.. can this be an embeded doc and not just the id?
    ref: 'ContactInfo',
  },

  socialMedia: {
    type: Schema.Types.ObjectId, // todo.. can this be an embeded doc and not just the id?
    ref: 'SocialMedia',
  },

  // favorites
  // what about speakers spoke at what event?
});

export default mongoose.model('Person', sessionSchema);
