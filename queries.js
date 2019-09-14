/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/
var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config');
mongoose.connect(config.db.uri, { useNewUrlParser: true });
const util = require('util')

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function () {
  /*
    Find the document that contains data corresponding to Library West,
    then log it to the console.
   */
  async function find() {
    const listing = await Listing.find({ name: 'Library West' });
    console.log(listing);
  }
  find();

};
var removeCable = function () {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
  async function remove() {
    const listing = await Listing.findOneAndDelete({ code: 'CABL' });
    if (listing === null) {
      console.log("Listing was not found or it has already  been deleted");
    } else {
      console.log(listing);
    }
  }
  remove();
};
var updatePhelpsLab = function () {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
  Listing.findOneAndUpdate({ "name": "Phelps Laboratory" }, { $set: { address: "1953 Museum Road Gainesville, FL 32611" } }, { returnOriginal: false }, (err, data) => {
    if (err) {
      console.log("Unable to update data.");
    }
    console.log(data);
  });
};
var retrieveAllListings = function () {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
  util.inspect.defaultOptions.maxArrayLength = null; //this enables the  console to display the
  Listing.find(function (err, data) {
    if (err) return handleError(err);
    console.log(data);

  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
//
