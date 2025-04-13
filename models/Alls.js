import mongoose, { Schema } from 'mongoose';
const topicSchema = new Schema(
  {
    tit: {
    type: String,
    required: [true, 'Please provide the book title.'],
  },
 
  tash: {
    type: String,
    required: [true, 'Please provide the book author.'],
  },
  
  summ: {
    type: String,
  },
  place: {
    type: String,
  },
  place2: {
    type: String,
  },
  place3: {
    type: String,
  },
  place4: {
    type: String,
  },
  place5: {
    type: String,
  },
  place6: {
    type: String,
  },
  place7: {
    type: String,
  },
  startDate: {
    type: String,
  },
 
  
  respo1: {
    type: String,
  },
  respo2: {
    type: String,
  },
  respo3: {
    type: String,
  },
  respo4: {
    type: String,
  },
  from1: {
    type: String,
  },
  from2: {
    type: String,
  },
  from3: {
    type: String,
  },
  from4: {
    type: String,
  },
  datos1: {
    type: String,
  },
  datos2: {
    type: String,
  },
  datos3: {
    type: String,
  },
  datos4: {
    type: String,
  },
  statuz: {
    type: String,
  },
  
  
  comment: {
    type: String,
  },
  refer: {
    type: String,
  },
},
{
    timestamps: true
}
);

const Alls = mongoose.models.All || mongoose.model('All', topicSchema);

export default Alls