module.exports = {
    async getMessage(req, res) {
        console.log('Incoming webhook: ' + JSON.stringify(req.body));
        res.sendStatus(200);
    }
}