import { useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

const App = () => {

	let citasIniciales = JSON.parse(localStorage.getItem('citas'));

	if (!citasIniciales){
		citasIniciales = []
	}

	const [citas, setCitas] = useState(citasIniciales);

	useEffect(() => {
		let citasIniciales = JSON.parse(localStorage.getItem('citas'));

		if(citasIniciales){
			localStorage.setItem('citas',JSON.stringify(citas))
		} else {
			localStorage.setItem('citas',JSON.stringify([]))
		}
	}, [citas])

	const crearCita = (cita) => {
		setCitas([...citas, cita]);
	};

	const deleteCita = (id) => {
		const newCita = citas.filter((cita) => cita.id !== id);
		setCitas(newCita);
	};

	const titulo = citas.length === 0 ? "No hay citas" : "administra tus citas";

	return (
		<>
			<h1>cool-rapi</h1>
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario crearCita={crearCita} />
					</div>
					<div className="one-half column">
						<h2>{titulo}</h2>
						{citas.map((cita) => (
							<Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
