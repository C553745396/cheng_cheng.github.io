/**
 * Created by cash on 2015/9/24.
 */

function fRandomBy(under, over){
    switch(arguments.length){
        case 1: return parseInt(Math.random()*under+1);
        case 2: return parseInt(Math.random()*(over-under+1) + under);
        default: return 0;
    }
}
function getRandomStr16(){
    var base = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var intLen = 16;
    var res = "";
    for (var i = 0 ; i < intLen ; i++){
        res += base.charAt(fRandomBy(1,base.length-1));
    }
    return res;
}


function myEncryptedString4(word){
    try {
        word = encodeURI(word);

        var strSHA = SHA256Encrypt(word);

        var k = getRandomStr16();
        var i = getRandomStr16();

        var key = CryptoJS.enc.Utf8.parse(k);
        var iv =CryptoJS.enc.Utf8.parse(i);

        var srcs  =  CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv,mode:CryptoJS.mode.CBC});

        var t = strSHA+k+i;
        var key1 = RSAUtils.getKeyPair('010001', '', '00a019fba58e28d6a42a63b17ec459232883937c26585faeec5cb2c2f2b89e4ae3e16caf060893c24981b97d7c36d36fba96a9a16405b791875df664411a75286dbf13837c0aa478485779b55a6db138269a4c5e85a71f25dbc348094c609afc74b4ae40692c232825b62194401f6b19327fe271ca3447c3e5401e651c3a0e2ad1');
        var tJ = RSAUtils.encryptedString(key1, t);

        return encrypted+"||"+tJ;

    } catch (e){
        alert(e)
    }
}
function myDecryptString3(word){

    var conn = Ext.lib.Ajax.getConnectionObject().conn;
    conn.open("POST",atom.webContextRoot+"/jmaction.do",false);
    conn.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
    var params = "method=getStrS";
    conn.send(params);
    var o = Ext.util.JSON.decode(conn.responseText);
    var res = "";
    res = o.res;
    publicKey['K'] = res.substr(0,16);
    //console.log(publicKey['K']+"len:"+publicKey['K'].length);

    publicKey['I'] = res.substr(16,16);
    //console.log(publicKey['I']+"len:"+publicKey['I'].length);

    publicKey['R'] = res.substr(32);
    //console.log(publicKey['R']+"len:"+publicKey['R'].length);

    var key = CryptoJS.enc.Utf8.parse(publicKey["K"]);
    var iv =CryptoJS.enc.Utf8.parse(publicKey["I"]);
    var decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv,mode:CryptoJS.mode.CBC});
    var tempStr = CryptoJS.enc.Utf8.stringify(decrypt).toString();
    tempStr = decodeURIComponent(tempStr);
    return tempStr;

}

function SHA256Encrypt(word){
    var srcs  =  CryptoJS.enc.Utf8.parse(word);
    var res = CryptoJS.SHA256(srcs);
    //CryptoJS.enc.utf
    res = CryptoJS.enc.Base64.stringify(res).toString();
    return res;
}



 function getAES(data){ //加密
          //  var data = document.getElementById("data-ipt").value;//明文
            var key  = '1234567812345678';  //密钥
            var iv   = 'Pkcs7';
            var encrypted = getAesString(data,key,iv); //密文
           return encrypted;
        }

        function getDAes(encrypted){//解密
            //var encrypted = document.getElementById("encrypted").innerHTML; //密文
            var key  = '1234567812345678';
            var iv   = 'Pkcs7';
            var decryptedStr = getDAesString(encrypted,key,iv);
           return decryptedStr;
        }
function getAesString(data,key,iv){//加密
            var key  = CryptoJS.enc.Hex.parse(key);
            var iv   = CryptoJS.enc.Latin1.parse(iv);
            var encrypted = CryptoJS.AES.encrypt(data,key,
                    {
                        iv:iv,
                        mode:CryptoJS.mode.CBC,
                        padding:CryptoJS.pad.Pkcs7
                    });
            return encrypted;
        }
        function getDAesString(encrypted,key,iv){//解密
            var key  = CryptoJS.enc.Hex.parse(key);
            var iv   = CryptoJS.enc.Latin1.parse(iv);
            var decrypted = CryptoJS.AES.decrypt(encrypted,key,
                    {
                        iv:iv,
                        mode:CryptoJS.mode.CBC,
                        padding:CryptoJS.pad.Pkcs7
                    });
            return decrypted.toString(CryptoJS.enc.Utf8);
        }

/**
 *  根据传入的参数对象，生成加密后的参数字符串
 *  */
function getJMParam (inParams){
    var returnStr = "";
    var regExp = /^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?]*$/;
    //returnStr = "Token="+currUser['token'];
    //for (var i in inParams) {
    //    if (inParams.hasOwnProperty(i)) {
    //      /*  if (testTSZF(i)  ){
    //            Ext.MessageBox.alert("提示", "参数名"+i+"包含特殊字符^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?");
    //            return "";
    //        }
    //        if (testTSZF(inParams[i])  ){
    //
    //            Ext.MessageBox.alert("提示", "参数值"+inParams[i]+"包含特殊字符^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?");
    //            return "";
    //        }*/
    //        //if (returnStr == "") {
    //        //    returnStr +=  ""+i+"="+inParams[i];
    //        //} else {
    //        //    returnStr += "||&&"+i+"="+inParams[i];
    //        //}
    //    }
    //}
//  returnStr = Ext.encode(inParams);		
		//JSOM.parse(jsonStr);//将json字符串转成json对象		
		returnStr = JSON.stringify(inParams);//将json对象转成json对符串		
    returnStr = myEncryptedString4(returnStr);    
    return returnStr;
}
/**
 * 校验是否含有特殊字符
 * @param s
 * @returns {boolean}
 */
function testTSZF(s){
    var regExp = /^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?]*$/;
    if(regExp.test(s))
    {
        return false;
    }
    return true;
}
/**
 *  根据传入的Extjs的formpanel对象，生成加密后的参数字符串
 *  */
function getJMExtFormPanel(formPanel){
    var returnStr = "";
    //returnStr = "Token="+currUser['token'];
    var returnObj = {};
    returnObj = getExtjsFormField(formPanel,returnObj);
    returnStr = Ext.encode(returnObj);
    returnStr = myEncryptedString4(returnStr);
    return returnStr;
}

/**
 * 获取form中所有对象的名值对
 * @param {Ext.form.FormPanel} formPanel
 */
function getExtjsFormField(formPanel,returnObj){
    var children=formPanel.items;
    if (!children) return returnObj;
    for (var i=0;i<children.getCount();i++){
        var childTmp=children.get(i);
        if (childTmp.items){
            returnObj = getExtjsFormField(childTmp,returnObj);
        }
//		var xtype=childTmp.xtype;
////		var origFldDisabled = childTmp.disabled;
//		if(xtype != "btntextfield" && !Ext.isEmpty(xtype)){
        try {
            if (childTmp.getName() != undefined && childTmp.getValue() != undefined) {
//                if (testTSZF(childTmp.getName())  ){
//                    Ext.MessageBox.alert("提示", "参数名"+childTmp.getName()+"包含特殊字符^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?");
//                    return "";
//                }
//                if (testTSZF(childTmp.getValue())  ){
//
//                    Ext.MessageBox.alert("提示", "参数值"+childTmp.getValue()+"包含特殊字符^`~!@#$%^&*()+=|\\\][\]\{\}:;'\.<>?");
//                    return "";
//                }

                if(childTmp.xtype == "datefield") {
                    returnObj[childTmp.getName()]
                        = Ext.util.Format.date(childTmp.getValue(), childTmp.format);
                    //if (returnStr == ""){
                    //    returnStr += "" + childTmp.getName()
                    //        + "=" + Ext.util.Format.date(childTmp.getValue(), childTmp.format);
                    //} else {
                    //    returnStr += "||&&" + childTmp.getName()
                    //        + "=" + Ext.util.Format.date(childTmp.getValue(), childTmp.format);
                    //}

                } else {
                    returnObj[childTmp.getName()]
                        = childTmp.getValue();
                    //if (returnStr == ""){
                    //    returnStr += "" + childTmp.getName()
                    //        + "=" + childTmp.getValue();
                    //} else {
                    //    returnStr += "||&&" + childTmp.getName()
                    //        + "=" + childTmp.getValue();
                    //}

                }
            }
        } catch(e){

        }

    }
    return returnObj;

}