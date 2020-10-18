/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.getElementById('InAppEvent').addEventListener('click', buttonClicked);


function onSuccess(result) {
    var conversionData = JSON.parse(result);

    if (conversionData.data.is_first_launch === true) {
    
        if(conversionData.data.af_status === 'Non-organic') {
        
            var media_source = conversionData.data.media_source;
            var campaign = conversionData.data.campaign;
            
            console.log('This is a Non-Organic install. Media source: ' + media_source + ' Campaign: ' + campaign);
            
        } else if(af_status === 'Organic'){
            console.log('Organic Install');
        }

    } else if (conversionData.data.is_first_launch === false) {
        // Not first launch 
    }
}

function onError(err) {
    console.log(err);
}
    
    var options = {
        devKey: '4ux8wjmC9qP6qc3UWZ5Ldh',
        appId: '1534996322',
        isDebug: true,
        waitForATTUserAuthorization: 10
    };
    
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    window.plugins.appsFlyer.initSdk(options, onSuccess, onError);

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

 

}
var  successTrackEvent = function(success){
    alert(success);
    }
    
    var  failureTrackEvent = function(failure){
    alert(failure);
    }
    
    var  eventName = 'af_purchase';
    var  eventValues = {
    'af_content_id':  'id123',
    'af_currency':  'USD',
    'af_revenue':  '2'
    };
function buttonClicked() {
    window.plugins.appsFlyer.logEvent(eventName, eventValues, successTrackEvent, failureTrackEvent);


}

