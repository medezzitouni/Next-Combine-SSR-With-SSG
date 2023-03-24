import { InputHTMLAttributes } from "react";

export interface Player {
	firstname: string;
	lastname: string;
	goal: number;
	salary: number;
	devise: string;
	pictureURl: string;
}

export interface PlayerProps {
    players: Player[]
}




export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}; 