/// QZ Config ///
    var cfg = null;
    // 0 qz 公共配置信息
    function getUpdatedConfig() {
        if (cfg == null) {
            cfg = qz.configs.create(null);
        }
        cfg.reconfigure({
                    altPrinting: false,
                    encoding: "",
                    endOfDoc: "",
                    perSpool: "",
                    colorType: "color",
                    copies: 1,
                    density: "",
                    duplex: false,
                    interpolation: "",
                    jobName: "",
                    margins: 0,
                    orientation: "",
                    paperThickness: "",
                    printerTray: "",
                    rasterize: true,
                    rotation: 0,
                    scaleContent: true,
                    size: null,
                    units: "in"
                });
        return cfg;
    }

    // 1 连接QZ print
    function con2qz(){
        qz.websocket.connect().then(function() {
        }).catch(displayError);
    }
    //var config = getUpdatedConfig();
    // 2 连接打印机
    // 
     // var file ='http://172.30.20.145:8080/MES/demo/assets/pdf_sample.pdf';
    var file ='assets/pdf_sample.pdf';
    function con2printer(){
        // var printer = document.getElementById("printer").value;
        qz.websocket.connect().then(function() {
        console.log(qz.websocket.isActive());
       return qz.printers.getDefault();              // Pass the printer name into the next Promise
        }).then(function(printer) {
            config = getUpdatedConfig();
            config.setPrinter(printer);
            console.log(file);
            
           var data = [
                { type: 'pdf', data: file}
            ];
            return qz.print(config, data);
        
        }).catch(function(e) { console.error(e); });

    }
