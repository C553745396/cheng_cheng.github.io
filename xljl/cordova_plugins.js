cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {  
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/ForwardConstants.js",
        "id": "org.apache.cordova.ForwardConstants",
 		"clobbers": [
            "DLForwardConstants"
        ]
    },
	{
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.load/www/loadconfig.js",  
        "id": "org.apache.cordova.loadconfig",  
        "merges": [  
			"navigator.loadconfig" 
        ]  
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.phone/www/phone.js",  
        "id": "org.apache.cordova.phone.phone",  
        "clobbers": [  
			"navigator.phone" 
        ]  
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.phone/www/PhoneError.js",  
        "id": "org.apache.cordova.phone.PhoneError",  
 		"clobbers": [
            "PhoneError"
        ]
    }, 	
	{
        "file": "plugins/com.dlxx.mam.plugins.eventupload/www/eventupload.js",  
        "id": "org.apache.cordova.eventupload",
        "merges": [
            "navigator.eventupload"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
	{
		"file": "plugins/com.dlxx.mam.plugins.requestheader/www/requestheader.js",  
		"id": "org.apache.cordova.requestheader",
		"merges": [
			"navigator.ajax"
		]
    },
    {
        "file": "plugins/com.dlxx.mam.plugins.toappserverupload/www/fileupload.js",
        "id": "org.apache.cordova.toappserverupload",
        "merges": [
            "navigator.appupload"
        ]
    },

    {
        "file": "plugins/com.dlxx.mam.plugins.contentcompression/www/contentcompression.js",
        "id": "org.apache.cordova.ContentCompression",
        "clobbers": [
            "navigator.ContentCompression"
        ]
    }
    ,
    {
        "file": "plugins/com.dlxx.mam.plugins.laboratory/www/forward.js",
        "id": "org.apache.cordova.forward",
        "clobbers": [
            "navigator.forward"
        ]
    }
    ,
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    }
    ,
    // 位置采集
	{
		"file": "plugins/com.dlxx.mam.plugins.gatheringLocation/www/gatheringLocation.js",  
		"id": "org.apache.cordova.gatheringLocation",
		"merges": [
			"navigator.openSwitch"
		]
   }
	,
   {
		"file": "plugins/com.dlxx.mam.plugins.downloadKnowledge/www/downloadKnowledge.js",  
		"id": "org.apache.cordova.downloadKnowledge",
		"merges": [
			"navigator.down"
		]
   },
   {
		"file": "plugins/com.dlxx.mam.plugins.contactUtils/www/contactUtils.js",  
		"id": "org.apache.cordova.contactUtils",
		"merges": [
			"navigator.contactUtils"
		]
   },
    {
        "file": "plugins/com.dlxx.mam.plugins.appmenu/www/appmenu.js",
        "id": "org.apache.cordova.appmenu",
        "merges": [
            "navigator.appmenu"
        ]
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.settings/www/settings.js",
        "id": "org.apache.cordova.settings",
        "merges": [  
            "mam.navigator.settings"
        ]  
    },
	{  
        "file": "plugins/com.dlxx.mam.plugins.userlogin/www/userlogin.js",
        "id": "org.apache.cordova.userlogin",
        "merges": [  
            "mam.navigator.userlogin"
        ]  
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.camera": "0.2.8",
    "org.apache.cordova.console": "0.2.7",
    "org.apache.cordova.contacts": "0.2.9",
    "org.apache.cordova.device": "0.2.8",
    "org.apache.cordova.device-motion": "0.2.6",
    "org.apache.cordova.device-orientation": "0.3.5",
    "org.apache.cordova.dialogs": "0.2.6",
    "org.apache.cordova.file": "1.0.1",
    "org.apache.cordova.file-transfer": "0.4.2",
    "org.apache.cordova.geolocation": "0.3.6",
    "org.apache.cordova.globalization": "0.2.6",
    "org.apache.cordova.inappbrowser": "0.3.3",
    "org.apache.cordova.media": "0.2.9",
    "org.apache.cordova.media-capture": "0.2.8",
    "org.apache.cordova.network-information": "0.2.7",
    "org.apache.cordova.splashscreen": "0.2.7",
    "org.apache.cordova.vibration": "0.3.7"
}
// BOTTOM OF METADATA
});