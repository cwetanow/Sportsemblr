const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true
    },
    password: String,

    description: {
        type: String
    },

    roles: {
        type: Array,
        default: ['standart']
    },
    ratings: [{
        sport: String,
        rating: Number
    }],

    userDescription: String,
    name: String,
    plays: [{
        sport: String,
        rating: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    }],
    requests: [{
        user: String,
        eventId: String
    }]
}, {
    timestamps: true
});

/**
 * Password hash middleware.
 */
userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    })
})

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    })
}

const User = mongoose.model('User', userSchema);

module.exports = User;