import { useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
	const objectCita = {
		persona: "",
		fecha: "",
		hora: "",
		tipo: "",
	};

	const [cita, setCita] = useState(objectCita);

	const updateState = (e) =>
		setCita({
			...cita,
			[e.target.name]: e.target.value,
		});

	const { persona, fecha, hora, tipo } = cita;

	const [error, setError] = useState(false);

	const submitCita = (e) => {
		e.preventDefault();

		if (
			persona.trim() === "" ||
			fecha.trim() === "" ||
			hora.trim() === "" ||
			tipo.trim() === ""
		) {
			setError(true);
			return;
		}
		setError(false);
		cita.id = uuid();

		crearCita(cita);

		setCita(objectCita);
	};

	return (
		<>
			<h2>Crear citas</h2>
			{error ? (
				<p className="alerta-error">Todos los campos son obligatorios</p>
			) : null}
			<form onSubmit={submitCita}>
				<label>Nombre</label>
				<input
					type="text"
					name="persona"
					className="u-full-width"
					placeholder="nombre"
					onChange={updateState}
					value={persona}
				/>
				<label>Fecha cita</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={updateState}
					value={fecha}
				/>
				<label>Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={updateState}
					value={hora}
				/>
				<label>Tipo de cita</label>
				<textarea
					name="tipo"
					className="u-full-width"
					onChange={updateState}
					value={tipo}
				></textarea>
				<button type="submit" className="u-full-width button-primary">
					Agregar cita
				</button>
			</form>
		</>
	);
};

Formulario.propType = {
	crearCita: PropTypes.func.isRequired
}

export default Formulario;
