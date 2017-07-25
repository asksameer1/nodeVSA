// Searches through all loaded signals by ticker, date, or trade direction.
  // Should be run once we've finished retrieiving all data from server.
  // Example search filters:
  // "signal.date === '2017-07-07'"
  // "signal.symbol === 'AAPL' && signal.trade === 'long'"

let data = require("./stockData.js");

function searchAllSignals (filter) {
  let searchResults;

  // Get search results.
  if (filter) { 
    searchResults = data.allSignals.filter(function(signal){
      return eval(eval(filter));
    });
  }

  // Return results..
  if (searchResults.length === data.allSignals.length) {
    return console.log("\n" + "\x1b[31m" + "No search results found." + "\x1b[0m" + "\n");
  } else {
    return searchResults;
  }

};

module.exports = searchAllSignals;
