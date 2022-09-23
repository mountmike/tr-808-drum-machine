function makeTextBold()
    {
        var textStr = document.getElementById('turnCapsBold').innerHTML;
        var outputStr = '';
        for (var loop=0; loop<textStr.length; loop++)
        {
            if (textStr.charCodeAt(loop) >= 65 && textStr.charCodeAt(loop) <= 90)
                outputStr += '<B>' + textStr.charAt(loop) + '</B>';
            else
                outputStr += textStr.charAt(loop);            
        }
        document.getElementById('turnCapsBold').innerHTML = outputStr;
    }
makeTextBold();