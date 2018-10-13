/**
 * @fileoverview This controller hosts the application logic
 * @author Darshit Gangar
 */

class MyController {
    constructor(value = 0) {
        this.localVariable = value;
    }

    getValue(req, res) {
        return res.send(`${this.localVariable}`);
    }

    setValue(req, res) {
        const { value } = req.query;
        this.localVariable = value;
        return res.send(`${this.localVariable}`);
    }
}

module.exports = MyController;
