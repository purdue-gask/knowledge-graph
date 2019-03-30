const neo4j = require("neo4j");
//var driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "neo4j"));
const driver = neo4j.driver("bolt://localhost");

//var statement = ['MERGE (alice:Person {name:{name_a},age:{age_a}})',
//  'MERGE (bob:Person {name:{name_b},age:{age_b}})',
//  'CREATE UNIQUE (alice)-[alice_knows_bob:KNOWS]->(bob)',
//  'RETURN alice, bob, alice_knows_bob'
//];

let statement = ["MATCH (n)",
                 "RETURN n"]

var params = {
  name_a: 'Alice',
  age_a: 33,
  name_b: 'Bob',
  age_b: 44
};

let promiseSession = driver.session();

let promiseResult = promiseSession.run(statement.join(' '), params);

promiseResult.then(function(records) {
	records.forEach(function(record) {
		for(var i in record) {
			console.log(i);
			console.log(record[i]);
		}
	});
	var summary =  promiseResult.summarize();
	console.log("");
	console.log(summary.updateStatistics.nodesCreated());
})
.catch(function(error) {
	console.log(error);
})
.then(function() {
	promiseSession.close();
});


