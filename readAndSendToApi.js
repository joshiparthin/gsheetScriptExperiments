function testing_this() {
    var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    for (row in data) {
        Logger.log(data[row]);

        var row = data[row]
        var options = {
            'method': 'post',
            'payload': { email:row[1]}
        };
        // sending to API. for example: 
        UrlFetchApp.fetch('https://track.customer.io/api/v1/customers/', options);
    }
}

testing_this();