console.log('This would be the main JS file.');

function myFunction() {
    var request = new XMLHttpRequest();
    var path="https://www.runscope.com/signin/oauth/authorize?response_type=code&client_id=585a304b-27f6-4242-94d4-1420afe75bb4&redirect_uri=http://wkloab.github.io/gd_api_testing/&scope=api:read&state=PLACEHOLDER";
    document.getElementById("click_me").innerHTML="clicked";
    window.open(path, '_blank', 'toolbar=0,location=0,menubar=0');
    request.onreadystatechange=state_change;
    request.open("GET", path, true);
    //request.setRequestHeader("Referer", "http://www.google.com");
    //request.setRequestHeader("User-Agent", "Mozilla/5.0");
    request.setRequestHeader("Accept","text/plain");
    request.setRequestHeader("Content-Type","text/plain");
    //request.setRequestHeader("Runscope-Bucket-Auth","d27c941d-4f8c-4e32-9904-f374ed9fd2e7");
    //request.setRequestHeader("Authorization","Bearer 4eed5810-b3d5-4a2e-b547-868021057fba");
    request.send(null);
    function state_change()
    {
        if (request.readyState==4)
        {// 4 = "loaded"
            if (request.status==200)
            {// 200 = OK
                // ...our code here...
                alert('ok');
            }
            else
            {
                alert("Problem retrieving XML data");
            }
        }
    }
}





