export default function (server) {

  server.route({
    path: '/api/deduplicate/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
