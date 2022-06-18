module.exports = {
    async getMessage(req, res) {
        console.log('Incoming webhook: ' + JSON.stringify(req.body));
        res.sendStatus(200);
    }, 
    async getTest(req, res) {
        const verify_token = process.env.VERIFY_TOKEN;

        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if (mode && token) {
            if (mode === "subscribe" && token === verify_token) {
                console.log("WEBHOOK_VERIFIED");
                res.status(200).send(challenge);
            } else {
                res.sendStatus(403);
            }
        }
    }
}