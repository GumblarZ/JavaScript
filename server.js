const { ApolloServer } = require("apollo-server");

const typeDefs = ` 
	  type Item {
		  id: Int
		  type: String
		  descripton: String
		  
	  }

	  type Query {
		prefixes: [Item]
		sufixes: [Item]
	}
`;
const items = [
{id: 1, type: "prefix", descripton: "Air"},
{id: 2, type: "prefix", descripton: "Jet"},
{id: 3, type: "prefix", descripton: "Flight"},
{id: 4, type: "sufix", descripton: "Hub"},
{id: 5, type: "sufix", descripton: "Station"},
{id: 6, type: "sufix", descripton: "Mart"},
]

const resolvers = {
	Query:{
		prefixes() {
			return items.filter(item => item.type === "prefix");
		},
		sufixes() {
			return items.filter(item => item.type === "sufix");
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();


