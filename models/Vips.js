import mongoose, { Schema } from 'mongoose';
const topicSchema = new Schema(
  {

    records: {
      type: Number,
    },
    tit: {
    type: String,
    required: [true, 'Please provide the title.'],
  },
  start: {
    type: String,
    required: [true, 'Please provide the responsible one.'],
  },
  tash: {
    type: String,
  },
  
  summ: {
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
  respo5: {
    type: String,
  },
  respo6: {
    type: String,
  },
  respo7: {
    type: String,
  },
  respo8: {
    type: String,
  },
  respo9: {
    type: String,
  },
  respo10: {
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
  from5: {
    type: String,
  },
  from6: {
    type: String,
  },
  from7: {
    type: String,
  },
  from8: {
    type: String,
  },
  from9: {
    type: String,
  },
  from10: {
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
  datos5: {
    type: String,
  },
  datos6: {
    type: String,
  },
  datos7: {
    type: String,
  },
  datos8: {
    type: String,
  },
  datos9: {
    type: String,
  },
  datos10: {
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

const Vips = mongoose.models.Vip || mongoose.model('Vip', topicSchema);

export default Vips