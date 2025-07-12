const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
	email:{
		type: String,
		require: true
	},
	// username -> passport local mongoose ne already set kr diya hoga
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);