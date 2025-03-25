export function currencyFormat(monto) {
	// Crear un formateador de acuerdo con la moneda USD (dólares)
	const formateador = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD', // Siempre en dólares
	});

	// Retornar el monto formateado
	return formateador.format(monto);
}
