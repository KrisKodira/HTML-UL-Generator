$("document").ready(function(){

    $("#generate").click(function(){  

        var outputText = "&#x3C;ul&#x3E;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#x3C;li&#x3E;";

        var text = stripHTML($("#text-to-convert").val());

        outputText += text.replace(/\n/g, "&#x3C;/li&#x3E;<br />&nbsp;&nbsp;&nbsp;&nbsp;&#x3C;li&#x3E;") + "&#x3C;/li&#x3E;";

        outputText += "<br/>&#x3C;/ul&#x3E;";

        $("#output").html(outputText);
    });
});

function stripHTML(dirtyString) {
    var container = document.createElement('div');
    var text = document.createTextNode(dirtyString);
    container.appendChild(text);
    return container.innerHTML;
}