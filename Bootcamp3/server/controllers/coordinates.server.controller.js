var config = require('../config/config'), 
    request = require('request');



module.exports = function(req, res, next) {
  if(req.body.address) {
      //This code just formats the address so that it doesn't have space and commas using escape characters
      var address1 = req.body.address;
      var address2 = address1.toLowerCase();
      var address3 = address2.replace(/\s/g, "%20");
      var address4 = address3.replace(/,/g , "%2C");
      
    //Setup your options q and key are provided. Feel free to add others to make the JSON response less verbose and easier to read 
    var options = { 
      q: address4,
      key: config.openCage.key,  
    }

    //Setup your request using URL and options - see ? for format
    request({
      url: 'https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=d3541613801a4e068da08362f0c999b9', 
      qs: options
      }, function(error, response, body) {
        //For ideas about response and error processing see https://opencagedata.com/tutorials/geocode-in-nodejs
        
        //JSON.parse to get contents. Remember to look at the response's JSON format in open cage data
        if (error) 
        {
          throw error;
        }
        
        if (response.statusCode == 200)
        {
          var coordinates = JSON.parse(body);
          /*Save the coordinates in req.results -> 
            this information will be accessed by listings.server.model.js 
            to add the coordinates to the listing request to be saved to the database.
            
            Assumption: if we get a result we will take the coordinates from the first result returned
          */
          req.results = coordinates.results[0].geometry;
        }
        
        next();
    });
  } else {
    next();
  }
};  