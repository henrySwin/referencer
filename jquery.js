$(document).ready(function(){
    var lang = "C#";
    var lastCmd;
    var code = "";

    function print(code) {
        lang = $('#language :selected').text();
        console.log("Language: " + lang);

        switch (lang) {
            case "C#":
                $("#result").val(code[0]);
                break;
            case "C++":
                $("#result").val(code[1]);
                break;
            case "Python":
                $("#result").val(code[2]);
                break;
            case "Java":
                $("#result").val(code[3]);
                break;
            case "Kotlin":
                $("#result").val(code[4]);
                break;
            case "JavaScript":
                $("#result").val(code[5]);
                break;
        }
    }

    // Language dropdown.
    //$("#language").change(function(){
    //    lang = $('#language :selected').text();
    //    console.log("Language: " + lang);
    //});

    // Selection / Iteration dropdown.
    $("#code-1").change(function(){
        const choice1 = $('#code-1 :selected').text();
        switch (choice1) {
            case "if":
                const c11 = [
                    'if ( (cond1 && cond2) || cond3 ) {\n\tcontinue;\n} else if (cond4) {\n\tcontinue;\n} else {\n\tcontinue;\n}',
                    'if in C++',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c11);
                break;
            case "switch":
                //$("#result").val('switch (var) {\n\tcase "case1":\n\t\tConsole.WriteLine("Case 1");\n\t\tbreak;\n\tcase "case2":\n\t\tConsole.WriteLine("Case 2");\n\t\tbreak;\n}');
                const c12 = [
                    'string colour = "blue";\nswitch (colour) {\n\tcase "red":\n\t\tConsole.WriteLine("It\'s red!);"\n\t\tbreak;\n\tcase "green":\n\t\tConsole.WriteLine("It\'s green!);"\n\t\tbreak;\n\tcase "blue":\n\t\tConsole.WriteLine("It\'s blue!);"\n\t\tbreak;\n}',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c12);
                break;
            case "for":
                //$("#result").val('for (var i = 0; i < 10; i++) {\n\tcontinue;\n}');
                const c13 = [
                    '// Prints 0, 1, \'continue\' skips 2, prints 3, \'breaks\' at 4.\nfor (int i = 0; i < 5; i++) {\n\tif (i == 2) continue;\n\telse if (i == 4) break;\n\tConsole.WriteLine("i = " + i);\n}',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c13);
                break;
            case "for each":
                const c14 = [
                    'string[] fruit = { "apple", "banana", "nectarine" };\nforeach (string i in fruit) {\n\tConsole.WriteLine(i);\n}',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c14);
                break;
            case "while":
                const c15 = [
                    'int i = 0;\nwhile (i < 5) {\n\tConsole.WriteLine("i = " + i);\n\ti++;\n}',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c15);
                break;
            case "do while":
                const c16 = [
                    'int i = 10;\ndo {\n\tConsole.WriteLine(i);\n\ti++;\n} while (i < 5);',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c16);
                break;
            default:
                break;
        }
    });

    // OOP dropdown.
    $("#code-2").change(function(){
        const choice2 = $('#code-2 :selected').text();
        switch (choice2) {
            case "function":
                const c21 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c21);
                break;
            case "class":
                const c22 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c22);
                break;
            case "inheritance":
                const c23 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c23);
                break;
            case "interface":
                const c24 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c24);
                break;
            default:
                break;
        }
    });

    // Miscellaneous dropdown.
    $("#code-3").change(function(){
        const choice3 = $('#code-3 :selected').text();
        switch (choice3) {
            case "comment":
                const c31 = [
                    '// Single line comment.\n\n/*\nMulti\nline\ncomment.\n*/',
                    '// Single line comment.\n\n/*\nMulti\nline\ncomment.\n*/',
                    '# Single line comment.\n\n"""\nMulti line comment\nUsing string literals\nWhich Python ignores.\n"""',
                    '// Single line comment.\n\n/*\nMulti\nline\ncomment.\n*/',
                    '// Single line comment.\n\n/*\nMulti\nline\ncomment.\n*/',
                    '// Single line comment.\n\n/*\nMulti\nline\ncomment.\n*/'
                ];
                print(c31);
                break;
            case "print console":
                const c32 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c32);
                break;
            case "regex":
                const c33 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c33);
                break;
            default:
                break;
        }
    });

    // Data connections dropdown.
    $("#code-4").change(function(){
        const choice4 = $('#code-4 :selected').text();
        switch (choice4) {
            case "database":
                const c41 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c41);
                break;
            case "file I/O":
                const c42 = [
                    '',
                    '',
                    '',
                    '',
                    '',
                    ''
                ];
                print(c42);
                break;
            default:
                break;
        }
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

    /*
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
    */
});