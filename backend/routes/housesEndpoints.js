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
router.get('/searchSort/:paramA/:paramB/:paramC/:paramD/:paramE/', asyncHandler(async (req, res) => {
		const sortOrSearch = req.params.paramA
		const city = req.params.paramB; 
		const price = req.params.paramC; 
		const rating = req.params.paramD;
		const sortType = req.params.paramE;
    let house = '';
		// search if 0, sort if not
    if(sortOrSearch == 0){
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
			
		} else{
			if(sortType == 1){
				house = await House.find({}).sort({city: "asc"});
			}
			if(sortType == 2){
				house = await House.find({}).sort({price: "asc"});
			}
			if(sortType == 3){
				house = await House.find({}).sort({rating: "asc"});
			}
			if(sortType == 4){
				house = await House.find({}).sort({city: "desc"});
			}
			if(sortType == 5){
				house = await House.find({}).sort({price: "desc"});
			}
			if(sortType == 6){
				house = await House.find({}).sort({rating: "desc"});
			}
		}
    if (house) {
			res.json(house)
    } else {
			res.status(404)
			throw new Error('Product not found!')
    }
}))
// functions for search without date -------------------------------------------------------
// helper functions to search city, price, and rating
const searchCityPriceRating = async(city, price, rating) =>{
    let pricevar = price - 100;
		let ratevar = rating - 1;
    const house = await House.find({city: city, price: {$gte:pricevar, $lte:price }, rating: {$gte:ratevar, $lte:rating}})
    return house;
}
// helper functions to search city and rating
const searchCityRating = async(city, rating) =>{
		let ratevar = rating - 1;
    const house = await House.find({city: city, rating: {$gte:ratevar, $lte:rating}})
    return house;
}
// helper functions to search city and price
const searchCityPrice = async(city, price) =>{
    let pricevar = price - 100;
    const house = await House.find({city: city, price: {$gte:pricevar, $lte:price}})
    return house;
}
// helper functions to search price and rating
const searchPriceRating = async(price, rating) =>{
    let pricevar = price - 100;
		let ratevar = rating - 1;
    const house = await House.find({price: {$gte:pricevar, $lte:price}, rating: {$gte:ratevar, $lte:rating}})
    return house;
}
// helper functions to search city
const searchCity = async(city) =>{
    const house = await House.find({city: city})
    return house;
}
// helper functions to search price
const searchPrice = async(price) =>{
    let pricevar = price - 100;
    const house = await House.find({price: {$gte:pricevar, $lte:price}})
    return house;
}
// helper functions to search rating
const searchRating = async(rating) =>{
		let ratevar = rating - 1;
    const house = await House.find({rating: {$gte:ratevar, $lte:rating}})
    return house;
}


module.exports = router;