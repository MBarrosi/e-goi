importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js"),firebase.initializeApp({messagingSenderId:"454972263667"});const messaging=firebase.messaging();var egoiapp={};egoiapp.getNavigatorDetails=function(){var a={options:[],header:[navigator.platform,navigator.userAgent,navigator.appVersion,navigator.vendor],dataos:[{name:"Windows Phone",returnName:"Windows Phone",value:"Windows Phone",version:"OS"},{name:"Windows",returnName:"Windows",value:"Win",version:"NT"},{name:"iPhone",returnName:"iPhone",value:"iPhone",version:"OS"},{name:"iPad",returnName:"iPad",value:"iPad",version:"OS"},{name:"Kindle",returnName:"Kindle",value:"Silk",version:"Silk"},{name:"Android",returnName:"Android",value:"Android",version:"Android"},{name:"PlayBook",returnName:"PlayBook",value:"PlayBook",version:"OS"},{name:"BlackBerry",returnName:"BlackBerry",value:"BlackBerry",version:"/"},{name:"Macintosh",returnName:"MacOS",value:"Mac",version:"OS X"},{name:"Linux",returnName:"Linux",value:"Linux",version:"rv"},{name:"Palm",returnName:"Palm",value:"Palm",version:"PalmOS"}],databrowser:[{name:"Chrome",returnName:"Chrome",value:"Chrome",version:"Chrome"},{name:"Edge",returnName:"Edge",value:"Edge",version:"Edge"},{name:"Firefox",returnName:"Firefox",value:"Firefox",version:"Firefox"},{name:"Safari",returnName:"Safari",value:"Safari",version:"Version"},{name:"Internet Explorer",returnName:"Internet Explorer",value:"MSIE",version:"MSIE"},{name:"Opera",returnName:"Opera",value:"Opera",version:"Opera"},{name:"BlackBerry",returnName:"BlackBerry",value:"CLDC",version:"CLDC"},{name:"Mozilla",returnName:"Mozilla",value:"Mozilla",version:"Mozilla"}],init:function(){var a=this.header.join(" ");return{os:this.matchItem(a,this.dataos),browser:this.matchItem(a,this.databrowser),device:this.matchDevice()}},matchDevice:function(){var a="desktop";return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(a="mobile"),a},matchItem:function(a,e){var i,o,t,n=0,r=0;for(n=0;n<e.length;n+=1)if(new RegExp(e[n].value,"i").test(a)){if(i=new RegExp(e[n].version+"[- /:;]([\\d._]+)","i"),t="",(o=a.match(i))&&o[1]&&(o=o[1]),o)for(o=o.split(/[._]+/),r=0;r<o.length;r+=1)t+=0===r?o[r]+".":o[r];else t="0";return{name:e[n].returnName,version:parseFloat(t)}}return{name:"unknown",version:0}}}.init();return{browser:{name:a.browser.name,version:a.browser.version},os:{name:a.os.name,version:a.os.version},device:a.device}}(),messaging.setBackgroundMessageHandler(function(a){let e="Egoi Web Push System",i={},o={body:"Egoi Web Push Default Message",icon:"https://cdn-static.egoiapp2.com/img/egoi-default-icon.jpg",image:"",requireInteraction:!1,tag:"egoi-push",click_action:"https://www.e-goi.com"};if(void 0!==a&&void 0!==a.data&&void 0!==a.data.notification&&(a.data.notification=JSON.parse(a.data.notification),e=void 0!==a.data.notification.title?a.data.notification.title:e,void 0!==a.data.egoiCustomData&&(a.data.egoiCustomData=JSON.parse(a.data.egoiCustomData),void 0!==a.data.egoiCustomData.actions&&(i=a.data.egoiCustomData.actions)),o={body:void 0!==a.data.notification.body?a.data.notification.body:o.body,icon:void 0!==a.data.notification.icon?a.data.notification.icon:o.icon,image:void 0!==a.data.notification.image?a.data.notification.image:o.image,requireInteraction:void 0===a.data.egoiCustomData.requireInteraction||a.data.egoiCustomData.requireInteraction,tag:void 0!==a.data.egoiCustomData.tag?a.data.egoiCustomData.tag:"egoi-push",click_action:void 0!==a.data.notification.click_action?a.data.notification.click_action:o.click_action},i.length>0&&(o.actions=i),a.data.egoiCustomData.browser=egoiapp.getNavigatorDetails.browser,a.data.egoiCustomData.os=egoiapp.getNavigatorDetails.os,a.data.egoiCustomData.device=egoiapp.getNavigatorDetails.device,o.data={egoiCustomData:a.data.egoiCustomData,notification_click:{click_action:o.click_action},webhook:void 0!==a.data.webhook?a.data.webhook:""},i.length>0))for(var t in i)i.hasOwnProperty(t)&&("action1"==i[t].action&&(o.data.notification_click.action1=i[t]),"action2"==i[t].action&&(o.data.notification_click.action2=i[t]));const n={egoiCustomData:a.data.egoiCustomData,event:"web_push_open",event_detail:""};return fetch(a.data.webhook,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(a=>console.log("Success:",a)).catch(a=>console.error("Error:",a)),self.registration.showNotification(e,o)}),self.addEventListener("notificationclick",function(a){a.notification.close();let e="";e="action1"==a.action?a.notification.data.notification_click.action1.link:"action2"==a.action?a.notification.data.notification_click.action2.link:a.notification.data.notification_click.click_action;var i={egoiCustomData:a.notification.data.egoiCustomData,event:"web_push_click",event_detail:e};fetch(a.notification.data.webhook,{method:"POST",body:JSON.stringify(i),headers:new Headers({"Content-Type":"application/json"})}).then(a=>{console.log("Success:",a.status),console.log("Success:",a)}).catch(a=>console.error("Error:",a)),a.waitUntil(clients.matchAll({type:"window"}).then(function(a){for(var i=0;i<a.length;i++){var o=a[i];if("/"==o.url&&"focus"in o)return o.focus()}if(clients.openWindow)return clients.openWindow(e)}))});