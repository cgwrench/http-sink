export default {
	async fetch() {
		return new Response(null, {
			status: 204,
			statusText: "No Content",
		});
	},
};
