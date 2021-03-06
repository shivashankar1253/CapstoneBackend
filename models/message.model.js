const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
	text:{
		type:String,
		required:true
	},
	user:{
		type:String,
		required:true
	},
	room:{
		type:String,
		required:true
	}
})

const Message = mongoose.model('Message',messageSchema);

module.exports = Message;

