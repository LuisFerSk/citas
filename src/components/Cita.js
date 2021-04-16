import PropTypes from "prop-types";

const Cita = ({ cita, deleteCita }) => {
	const { id, persona, fecha, hora, tipo } = cita;
	return (
		<>
			<div className="cita">
				<p>
					persona: <span>{persona}</span>
				</p>
				<p>
					fecha: <span>{fecha}</span>
				</p>
				<p>
					hora: <span>{hora}</span>
				</p>
				<p>
					tipo: <span>{tipo}</span>
				</p>

				<button
					className="button eliminar u-full-width"
					onClick={() => deleteCita(id)}
				>
					Eliminar &times;
				</button>
			</div>
		</>
	);
};

Cita.propType = {
	cita: PropTypes.object.isRequired,
	deleteCita: PropTypes.func.isRequired
}

export default Cita;
