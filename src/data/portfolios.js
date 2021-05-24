import img1 from "../img/portImages/pokedex.PNG";
import img2 from "../img/portImages/chat.PNG";
import img3 from "../img/portImages/rickandmorty.PNG";
import img4 from "../img/portImages/trivia.PNG";
import img5 from "../img/portImages/CRUD.PNG";

const portfolios = [
	{
		id: 1,
		category: "React",
		image: img1,
		link1: "https://github.com/GAPV-Coder/Pokedex-React",
		link2: "https://pokedex-reactapp.netlify.app/#/login",
		title: "The Pokédex - React App",
		text: "The Pokédex",
	},
	{
		id: 2,
		category: "React",
		image: img2,
		link1: "https://github.com/GAPV-Coder/chatDraft.git",
		link2: "https://chat-redux-socketio.netlify.app",
		title: "Chat in Live - React App",
		text: "Chat in Live Redux",
	},
	{
		id: 3,
		category: "React",
		image: img3,
		link1: "https://github.com/GAPV-Coder/Rick-and-Morty-React_API.git",
		link2: "https://universe-rickandmorty.netlify.app",
		title: "Ther Rick & Morty App",
		text: "Rick & Morty React App",
	},
	{
		id: 4,
		category: "Javascript",
		image: img4,
		link1: "https://github.com/GAPV-Coder/Trivia-API-OOP.git",
		link2: "https://trivia-game-api.netlify.app",
		title: "Trivia Game - App",
		text: "API Open Trivia",
	},
	{
		id: 5,
		category: "Node JS",
		image: img5,
		link1: "https://github.com/GAPV-Coder/CRUD-sequelize-handlebars.git",
		link2: "https://crud-bank-system.herokuapp.com/",
		title: "CRUD - Node JS App",
		text: "Bank System operations",
	},
];

export default portfolios;
