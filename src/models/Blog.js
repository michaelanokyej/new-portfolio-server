const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  blogbody: {
    type: String,
    required: true
  },
  links: {
    type: Array
  },
  blogtype: {
    type: String,
    required: true
  },
  blogimage: String,
  blogvideo: String,
  posted: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Blog", BlogSchema);