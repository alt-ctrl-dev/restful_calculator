module.exports = function (express) {
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.redirect("/ui")
  });

  router.get('/ui', function (req, res, next) {
    res.render('index', { title: 'Simple calculator' });
  });

  // router.get('/add', function (req, res) {
  //   try {
  //     var numbers = req.query.numbers.map(function (curr) {
  //       if ((typeof curr) == "number") return curr;
  //       else {
  //         var returnData;
  //         try {
  //           returnData = Number(curr);
  //           if (isNaN(returnData)) throw new Error("Please pass numbers as parameters")
  //         } catch (error) {
  //           throw error;
  //         }
  //         return returnData
  //       }
  //     });
  //     var output = numbers.reduce((prev, curr) => { return prev + curr; })
  //     res.send(`${output}`);
  //   } catch (error) {
  //     res.status(409).send(`${error.message}`);
  //   }
  // });

  return router
}
