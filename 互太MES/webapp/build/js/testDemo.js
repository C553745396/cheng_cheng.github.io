
 function findPrinters() {
   qz.printers.find().then(function(data) {
      var list = '';
      for(var i = 0; i < data.length; i++) {
         list += "&nbsp; " + data[i] + "<br/>";
     }
     displayMessage("<strong>Available printers:</strong><br/>" + list);
  }).catch(function(e) { console.error(e); });
}

var config = qz.configs.create("HP LaserJet Pro MFP M225-M226 PCL 6");               // Exact printer name from OS
var data = ['^XA^FO50,50^ADN,36,20^FDRAW ZPL EXAMPLE^FS^XZ'];   // Raw commands (ZPL provided)

qz.print(config, data).then(function() {
   alert("Sent data to printer");
});