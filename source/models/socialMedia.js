import mongoose from 'mongoose';

const Schema = mongoose;

const schema = new Schema({
  twitter: { type: String },
  facebook: { type: String },
  musicly: { type: String },
  snapchat: { type: String },
  linkedin: { type: String },
  youtube: { type: String },
  musical: { type: String },
});

export default mongoose.model('SocialMedia', schema);
