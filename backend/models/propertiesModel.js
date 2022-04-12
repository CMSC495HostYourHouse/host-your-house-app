import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const houseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    reservations: [{
        type: String,
        required: true,
        default: 0
    }]
}, {
    timestamps: true
})

const House = mongoose.model('Properties', houseSchema)

export default House