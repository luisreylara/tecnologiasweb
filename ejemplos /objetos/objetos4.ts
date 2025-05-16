interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

// Iterating properties.
let planet: Planet = {
	name : "Earth",
	galaxy: "Milky Way",
	numberOfMoons : 1,
	weight : 100000
};

for(let prop in planet)
{
	console.log("Planet " + prop + " :- " + planet[prop]);
}
