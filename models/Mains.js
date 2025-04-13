import mongoose, { Schema } from 'mongoose';
const topicSchema = new Schema(
  {
    records: {
    type: Number,
  },
    tit: {
    type: String,
    required: [true, 'Please provide the  title.'],
  },
  start: {
    type: String,
    required: [true, 'Please provide the place.'],
  },
  tash: {
    type: String,
    required: [true, 'Please provide the sign .'],
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
  place8: {
    type: String,
  },
  place9: {
    type: String,
  },
  place10: {
    type: String,
  },
  place11: {
    type: String,
  },
  place12: {
    type: String,
  },
  place13: {
    type: String,
  },
  place14: {
    type: String,
  },
  place15: {
    type: String,
  },
  place16: {
    type: String,
  },
  place17: {
    type: String,
  },
  place18: {
    type: String,
  },
  place19: {
    type: String,
  },
  place20: {
    type: String,
  },
  place21: {
    type: String,
  },
  place22: {
    type: String,
  },
  place23: {
    type: String,
  },
  place24: {
    type: String,
  },
  place25: {
    type: String,
  },
  place26: {
    type: String,
  },
  place27: {
    type: String,
  },
  place29: {
    type: String,
  },
  place30: {
    type: String,
  },
  importance: {
    type: String,
  },
  
 
 
  
  startDate: {
    type: String,
  },
  startDateout: {
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

const Mains = mongoose.models.Main || mongoose.model('Main', topicSchema);

export default Mains