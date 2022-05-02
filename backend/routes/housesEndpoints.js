const { ContactlessOutlined } = require('@mui/icons-material');
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const databaseConnection = require("../conn"); // This will help us connect to the database
const House = require('../models/propertiesModel');
const ObjectId = require("mongodb").ObjectId; // This help convert the id from string to ObjectId for the _id.


// @desc Fetch all houses
// @route GET /api/houses
// @access Public
router.get('/', asyncHandler(async (req, res) => {
    const houses = await House.find({})

    res.json(houses)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const house = await House.findById({_id: ObjectId(req.params.id)})
    if (house) {
        res.json(house)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

// search properties
router.get('/search/:paramA/:paramB/:paramC/', asyncHandler(async (req, res) => {
    
		const city = req.params.paramA; 
		const price = req.params.paramB; 
		const rating = req.params.paramC;

		console.log(city + ' ' + price + ' ' + rating)

    let house = ''
    // const house = await House.find({price: {$gte:req.params.item1, $lte: req.params.item2}})
			if((city === 'default') && (price == 0) && (rating == 0)){
				house = await House.find({})
			}
			// search city price and rating
			if((city !== 'default') && (price != 0) && (rating != 0)){
				house = await searchCityPriceRating(city, price, rating);
			}
			// search city and rating
			if((city !== 'default') && (price == 0) && (rating != 0)){
				house = await searchCityRating(city, rating);
			}
			// search city and price
			if((city !== 'default') && (price != 0) && (rating == 0)){
				house = await searchCityPrice(city, price);
			}
			// search price and rating
			if((city === 'default') && (price != 0) && (rating != 0)){
				house = await searchPriceRating(price, rating);
			}
			// search city
			if((city !== 'default') && (price == 0) && (rating == 0)){
				house = await searchCity(city);
			}
			// search price
			if((city === 'default') && (price != 0) && (rating == 0)){
				house = await searchPrice(price);
			}
			// search rating
			if((city === 'default') && (price == 0) && (rating != 0)){
				house = await searchRating(rating);
			}
    if (house) {
        res.json(house)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }
}))

// helper functions to search city, price, and rating
const searchCityPriceRating = async(item1, item2, item3) =>{
    let pricevar = item2 - 100;
		let ratevar = item3 - 1;
    const house = await House.find({city: item1, price: {$gte:pricevar, $lte:item2 }, rating: {$gte:ratevar, $lte:item3}})
    return house;
}
// helper functions to search city and rating
const searchCityRating = async(item1, item3) =>{
		let ratevar = item3 - 1;
    const house = await House.find({city: item1, rating: {$gte:ratevar, $lte:item3}})
    return house;
}
// helper functions to search city and price
const searchCityPrice = async(item1, item2) =>{
    let pricevar = item2 - 100;
    const house = await House.find({city: item1, price: {$gte:pricevar, $lte:item2 }})
    return house;
}
// helper functions to search price and rating
const searchPriceRating = async(item2, item3) =>{
    let pricevar = item2 - 100;
		let ratevar = item3 - 1;
    const house = await House.find({price: {$gte:pricevar, $lte:item2 }, rating: {$gte:ratevar, $lte:item3}})
    return house;
}
// helper functions to search city
const searchCity = async(item1) =>{
    const house = await House.find({city: item1})
    return house;
}
// helper functions to search price
const searchPrice = async(item2) =>{
    let pricevar = item2 - 100;
    const house = await House.find({price: {$gte:pricevar, $lte:item2 }})
    console.log(pricevar)
    return house;
}
// helper functions to search rating
const searchRating = async(item3) =>{
		let ratevar = item3 - 1;
    const house = await House.find({rating: {$gte:ratevar, $lte:item3}})
   
    return house;
}


module.exports = router;