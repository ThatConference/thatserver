import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session',
    },
  ],
  speakers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Speaker',
    },
  ],
});

export default mongoose.model('Tag', schema);
