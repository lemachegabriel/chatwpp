module.exports = {
    async getMessage(req, res) {
        console.log('Incoming webhook: ' + JSON.stringify(req.body));
        res.sendStatus(200);
    }, 
    async getTest(req, res) {
        const data = req.body
        const challenge = data['hub_challenge']
        res.send(challenge)
    }
}