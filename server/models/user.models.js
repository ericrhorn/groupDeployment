
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "First Name Required"], minLength: [3, "Must be atleast three characters"]},
    lastName: { type: String, required: [true, "Last Name Required"], minLength: [3, "Must be atleast three characters"]},
    email: { type: String, required: [true, "Email Required"], 
            validate: {validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"}},
    password: { type: String, required: [true, "Password Required"], minLength: [8, "Must be atleast eight characters"]},
},
{ timestamps: true }
);

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
}
next();
});

UserSchema.pre("save", function (next) {
    bcrypt
    .hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
    .catch((err) => {
        console.log(err);
    });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;



