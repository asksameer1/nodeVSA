let data = require("./stockData.js");

// Builds our signal objects, so we can search through them and write them to screen/disk.
// Ex: Call this with the pivotLows array for a particular ticker to generate long signals.
function buildSignals (direction, pivotsArr, ticker) {
  // Init signals array if undefined.
  data.allSignals = data.allSignals || [];

  // Find supply tests (long).
  for (let i = 1; i < pivotsArr.length; i++) { // Start @ 1 because else comparison gets undef.
    if (pivotsArr[i].priorHitsCount > 0) {
      // Build and store new signal object...
      let currentSignal = {
        date: pivotsArr[i].date.split(' ')[0], // Removes the random timestamp.
        symbol: ticker,
        trade: direction,
        priorHits: pivotsArr[i].priorHits,
        priorHitsCount: pivotsArr[i].priorHitsCount,
        recentHits: pivotsArr[i].recentHits,
        recentHitsCount: pivotsArr[i].recentHitsCount,
        recentHitsOnDecreasingVolumeCount: pivotsArr[i].recentHitsOnDecreasingVolumeCount,
        absorptionVolume: pivotsArr[i].absorptionVolume,
        data: pivotsArr[i]
      };
      data.allSignals.push(currentSignal);
    }
  }
}

module.exports = buildSignals;
