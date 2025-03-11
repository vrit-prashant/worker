export default {
    async fetch(request) {
        let url = new URL(request.url);
        let r2Url = `https://collegeinfo-bucket.0eb36d57e9131fec092a0e63d1ee3d2f.r2.cloudflarestorage.com${url.pathname}`;
        let response = await fetch(r2Url);
        return new Response(response.body, response);
    }
}
