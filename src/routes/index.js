export async function get(request) {
	console.log('Getting...', request);
	const environment = import.meta.env.VITE_TEST_VARIABLE;
	return {
		body: { environment }
	};
}
