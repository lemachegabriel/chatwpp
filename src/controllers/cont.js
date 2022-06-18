module.exports = {
    async getMessage(req, res) {
        console.log('Incoming webhook: ' + JSON.stringify(req.body));
        res.sendStatus(200);
    }, 
    async getTest(req, res) {
        const data = req.query
        const challenge = data['hub.challenge']
        console.log(data)
        res.status(200).send(challenge);
    }
}