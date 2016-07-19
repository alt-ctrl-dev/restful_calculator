'use strict'
module.exports = function (express) {
    var router = express.Router();
    const actionValidation = [
        "clear", "add", "subtract", "multiply", "divide", "equal", "dot", "number"
    ]
    router.get("/", function (req, res) {
        let returnJSON = {
            display: 0,
            links: {}
        }

        try {
            if (req.query.action) {
                if (actionValidation.indexOf(req.query.action) < 0) throw new Error("Please pass a valid command")
            }

            switch (req.query.action) {
                case "dot": {
                    returnJSON.display = req.query.display + ".";
                    returnJSON.links["one"] = "/calculator?action=number&display=" + returnJSON.display + "1"
                    returnJSON.links["two"] = "/calculator?action=number&display=" + returnJSON.display + "2"
                    returnJSON.links["three"] = "/calculator?action=number&display=" + returnJSON.display + "3"
                    returnJSON.links["four"] = "/calculator?action=number&display=" + returnJSON.display + "4"
                    returnJSON.links["five"] = "/calculator?action=number&display=" + returnJSON.display + "5"
                    returnJSON.links["six"] = "/calculator?action=number&display=" + returnJSON.display + "6"
                    returnJSON.links["seven"] = "/calculator?action=number&display=" + returnJSON.display + "7"
                    returnJSON.links["eight"] = "/calculator?action=number&display=" + returnJSON.display + "8"
                    returnJSON.links["nine"] = "/calculator?action=number&display=" + returnJSON.display + "9"
                    returnJSON.links["zero"] = "/calculator?action=number&display=" + returnJSON.display + "0"

                    let operation = "";
                    if (req.query.operation !== undefined) {
                        operation = `operation=${req.query.operation}&number=${req.query.number}`;
                    }
                    for (var key in returnJSON.links) {
                        returnJSON.links[key] += operation;
                    }
                }
                    break;

                case "number": {
                    returnJSON.display = req.query.display;
                    returnJSON.links["one"] = "/calculator?action=number&display=" + returnJSON.display + "1"
                    returnJSON.links["two"] = "/calculator?action=number&display=" + returnJSON.display + "2"
                    returnJSON.links["three"] = "/calculator?action=number&display=" + returnJSON.display + "3"
                    returnJSON.links["four"] = "/calculator?action=number&display=" + returnJSON.display + "4"
                    returnJSON.links["five"] = "/calculator?action=number&display=" + returnJSON.display + "5"
                    returnJSON.links["six"] = "/calculator?action=number&display=" + returnJSON.display + "6"
                    returnJSON.links["seven"] = "/calculator?action=number&display=" + returnJSON.display + "7"
                    returnJSON.links["eight"] = "/calculator?action=number&display=" + returnJSON.display + "8"
                    returnJSON.links["nine"] = "/calculator?action=number&display=" + returnJSON.display + "9"
                    returnJSON.links["zero"] = "/calculator?action=number&display=" + returnJSON.display + "0"
                    if (returnJSON.display.indexOf(".") < 0)
                        returnJSON.links["dot"] = "/calculator?action=dot&display=" + returnJSON.display

                    let operation = "";
                    if (req.query.operation === undefined) {
                        returnJSON.links["add"] = "/calculator?action=add&display=0&number=" + returnJSON.display
                        returnJSON.links["subtract"] = "/calculator?action=subtract&display=0&number=" + returnJSON.display
                        returnJSON.links["multiply"] = "/calculator?action=multiply&display=0&number=" + returnJSON.display
                        returnJSON.links["divide"] = "/calculator?action=divide&display=0&number=" + returnJSON.display
                    }
                    else {
                        operation = `&operation=${req.query.operation}&number=${req.query.number}`;
                        returnJSON.links["equal"] = "/calculator?action=equal&display=" + returnJSON.display
                    }
                    for (var key in returnJSON.links) {
                        returnJSON.links[key] += operation;
                    }

                    returnJSON.links["clear"] = "/calculator"
                }
                    break;

                case "add":
                case "subtract":
                case "multiply":
                case "divide": {
                    let input = Number(`${req.query.display}`);
                    returnJSON.display = "0";
                    returnJSON.links["one"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["two"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["three"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["four"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["five"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["six"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["seven"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["eight"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["nine"] = `/calculator?action=number&display=1&operation=${req.query.action}&number=${input}`
                    returnJSON.links["dot"] = `/calculator?action=dot&display=0&operation=${req.query.action}&number=${input}`
                    returnJSON.links["clear"] = "/calculator"
                }
                    break;

                case "equal": {
                    let input1 = Number(`${req.query.display}`);
                    let input2 = Number(`${req.query.number}`);

                    switch (req.query.operation) {
                        case "add":
                            returnJSON.display = `${input1 + input2}`
                            break;

                        case "subtract":
                            returnJSON.display = `${input1 - input2}`
                            break;

                        case "multiply":
                            returnJSON.display = `${input1 * input2}`
                            break;

                        case "divide":
                            returnJSON.display = `${input2 / input1}`
                            break;
                    }
                    returnJSON.links["add"] = "/calculator?action=add&display=0&number=" + returnJSON.display
                    returnJSON.links["subtract"] = "/calculator?action=subtract&display=0&number=" + returnJSON.display
                    returnJSON.links["multiply"] = "/calculator?action=multiply&display=0&number=" + returnJSON.display
                    returnJSON.links["divide"] = "/calculator?action=divide&display=0&number=" + returnJSON.display
                    returnJSON.links["clear"] = "/calculator"
                }
                    break;

                case "clear":
                default: {
                    returnJSON.display = `0`;
                    returnJSON.links["one"] = "/calculator?action=number&display=1"
                    returnJSON.links["two"] = "/calculator?action=number&display=2"
                    returnJSON.links["three"] = "/calculator?action=number&display=3"
                    returnJSON.links["four"] = "/calculator?action=number&display=4"
                    returnJSON.links["five"] = "/calculator?action=number&display=5"
                    returnJSON.links["six"] = "/calculator?action=number&display=6"
                    returnJSON.links["seven"] = "/calculator?action=number&display=7"
                    returnJSON.links["eight"] = "/calculator?action=number&display=8"
                    returnJSON.links["nine"] = "/calculator?action=number&display=9"
                    returnJSON.links["dot"] = "/calculator?action=dot&display=0."
                    returnJSON.links["add"] = "/calculator?action=add&display=0&number=0"
                    returnJSON.links["subtract"] = "/calculator?action=subtract&display=0&number=0"
                    returnJSON.links["multiply"] = "/calculator?action=multiply&display=0&number=0"
                    returnJSON.links["divide"] = "/calculator?action=divide&display=0&number=0"
                }
                    break;
            }
            res.json(returnJSON)
        }
        catch (error) {
            console.error(error.message)
            res.status(400).send(error.message)
        }
    })

    return router
}
