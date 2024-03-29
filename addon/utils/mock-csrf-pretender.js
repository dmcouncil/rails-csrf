export default function mockCsrf(pretenderServer) {
  pretenderServer.get('/api/csrf', function() {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({
      "authenticity_token": "token"
    })];
  });
}
