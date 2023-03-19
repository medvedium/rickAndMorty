import React
	from "react";
import {
	Link,
	useParams
} from "react-router-dom";
import {
	useQuery
} from "@apollo/client";
import {
	CHARACTER
} from "../../apollo/query";
import Loader
	from "../Loader/Loader";
import {
	Typography
} from "@mui/material";

const Character = () => {
	const params = useParams();
	const id = params.id && Number(params.id);

	const {
		loading,
		error,
		data: character,
	} = useQuery(CHARACTER, {variables: {id: id}});

	const date = character && new Date(character.character.created)

	const person: any = character?.character;

	if (loading) return <Loader/>;
	if (error) return <h2>Ошибка
		загрузки
		данных</h2>;
	return (
		<div>
			<div
				style={{
					display: 'flex',
					marginBottom: '30px',
					alignItems: 'center'
				}}>
				<div
					style={{flexBasis: '350px'}}>
					<img
						src={character.character.image}
						alt={character.character.name}/>
				</div>
				<div>
					<Typography
						variant="h2">{character.character.name}</Typography>
					<Typography
						variant={"h5"}>{character.character.gender ? 'Gender: ' : ''}{character.character.gender}</Typography>
					<Typography
						variant={"h5"}>{character.character.status ? 'Live status: ' : ''}{character.character.status}</Typography>
					<Typography
						variant={"h5"}>{character.character.species ? 'Race: ' : ''}{character.character.species}</Typography>
					<Typography
						variant={"h5"}>{character.character.type ? 'Type: ' : ''}{character.character.type}</Typography>
					<Typography
						variant={"h5"}>{character.character.created ? 'Character created: ' : ''}{date && date.toLocaleString()}</Typography>
				</div>
			</div>
			<Typography
				variant={"h5"}>Episodes:</Typography>
			<ul
				style={{marginBottom: '30px'}}>
				{person &&
					person?.episode.map((item: any, index: number) => (
						<li
							key={item.id}
							style={{margin: "5px"}}>
                <span
									style={{
										fontSize: "12px",
										color: "#aaa",
										marginRight: "8px"
									}}>
                  {item.episode}
                </span>
							<Link
								to={`/episode/${item.id}`}>
								{item.name}
							</Link>
						</li>
					))}
			</ul>
		</div>

	);
};

export default Character;
