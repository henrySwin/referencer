$(document).ready(function(){
    var lang = "C#";
    var lastCmd;
    var code = "";

    // Language dropdown.
    $("#language").change(function(){
        lang = $('#language :selected').text();
        console.log("Language: " + lang);
    });

    // Undo button.
    $("#undo").click(function(){
        console.log("Undo last command.");
        switch(lastCmd) {
            case "reset":
                $("#result").val(code);
                break;
        }
    });

    // Reset button.
    $("#reset").click(function(){
        code = $("#result").val();
        $("#result").val('');
        lastCmd = "reset";
    });

    // if, else if, else.
    $("#code-if").click(function(){
        $("#result").val('if ( (cond1 && cond2) || cond3 ) {\n\tcontinue;\n} else if (cond4) {\n\tcontinue;\n} else {\n\tcontinue;\n}');
        code = $("#result").val();
        lastCmd = "code-if";
    });

    // switch case.
    $("#code-switch").click(function(){
        $("#result").val('switch (var) {\n\tcase "case1":\n\t\tConsole.WriteLine("Case 1");\n\t\tbreak;\n\tcase "case2":\n\t\tConsole.WriteLine("Case 2");\n\t\tbreak;\n}');
        code = $("#result").val();
        lastCmd = "code-if";
        console.log("Language: " + lang);
    });
});