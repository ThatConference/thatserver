import mongoose from 'mongoose';

const Schema = mongoose;

const speakerSchema = new Schema({
  firstName: {
    type: String,
    unique: false,
    required: true,
  },

  lastName: {
    type: String,
    unique: false,
    required: true,
  },

  email: {
    type: String,
    unique: false,
    required: true,
  },

  socialMedia: {
    type: Schema.Types.ObjectId,
    ref: 'SocialMedia',
  },

  webSite: {
    type: String,
    unique: false,
    required: false,
  },

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session',
    },
  ],
});

export default mongoose.model('Speaker', speakerSchema);
