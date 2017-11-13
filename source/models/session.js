import mongoose from 'mongoose';

const Schema = mongoose;

const sessionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  presentationLink: {
    type: String,
  },

  supportingLinks: [
    {
      type: String,
    },
  ],

  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],

  speakers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Person',
    },
  ],
});

export default mongoose.model('Session', sessionSchema);
