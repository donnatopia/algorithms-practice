const findItinerary = require('./findItinerary');

xdescribe('332. Reconstruct Itinerary', () => {

  it('should reconstruct the itinrary in order and return it', () => {
    expect(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])).toStrictEqual(["JFK","MUC","LHR","SFO","SJC"]);
    expect(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])).toStrictEqual(["JFK","ATL","JFK","SFO","ATL","SFO"]);
    expect(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]])).toStrictEqual(["JFK","NRT","JFK","KUL"]);
  });

});