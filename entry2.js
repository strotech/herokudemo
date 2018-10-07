exports.dialogflowFirebaseFulfillment = function(req, res) {

    if (req.body.result.action == "schedule") {
        return res.json({
            speech: 'Something went wrong!',
            displayText: 'Something went wrong!',
            source: 'game schedule'
        });
      }
      
    };