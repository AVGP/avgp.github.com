var terminal = (function(elem) {
    var commands = {},
        history = (localStorage.getItem("history") ? localStorage.getItem("history").split(",") : []),
        historyIndex = history.length;
        self = {};

    var KEY_UP   = 38,
        KEY_DOWN = 40;

    // Commands

    commands.help = function(args) {
        return "<p>Welcome to the <span style=\"color: #0f0; font-weight: bold\">Geekonaut</span> terminal</p>" +
               "<p>Here is what you can do:</p>" +
               "<ul>" +
               "<li><strong>ls</strong> - lists the available content files</li>" +
               "<li><strong>more FILE</strong> - shows the content of FILE</li>" +
               "<li><strong>exit</strong> - exits to the homepage</li>"
               "</ul><p>Pro tip: There's a telnet listening on 2342, too. :)</p>";
    };

    commands.exit = function() {
        window.location.href = "index.html";
    };

    commands.ls = function(args) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", "content/content.json", false);
      xhr.send();
      var output = "<div>",
          files  = JSON.parse(xhr.responseText);
      for(var i=0; i<files.length; i++) output += "<p>" + files[i] + "</p>";
      output += "</div>";

      return output;
    };

    commands.more = function(args) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", "content/" + args[1], false);
      xhr.send();
      var output = "<div>";
      
      if(xhr.status != 200) {
          output += "<p style=\"color: red\">That can't be displayed :(</p>" +
                    "<p>Hint: Use the full filename, e.g. \"home.md\".</p></div>"
          return output;
      }
      
      output += marked(xhr.responseText);
      output += "</div>";

      return output;
    };

    // Auxiliary functions

    var resetPrompt = function(terminal, prompt) {
        var newPrompt = prompt.parentNode.cloneNode(true);
        prompt.setAttribute("contenteditable", false);        
        terminal.appendChild(newPrompt);
        newPrompt.querySelector(".input").innerHTML = " ";
        newPrompt.querySelector(".input").focus();        
    };

    var runCommand = function(terminal, cmd, args) {
        terminal.innerHTML += (commands[cmd](args));        
    };

    var updateHistory = function(cmd) {
        history.push(cmd);
        localStorage.setItem("history", history);
        historyIndex = history.length;
    };

    var browseHistory = function(prompt, direction) {
        var changedPrompt = false;
        if(direction == KEY_UP && historyIndex > 0) {
            prompt.textContent = history[--historyIndex];
            changedPrompt = true;
        } else if(direction == KEY_DOWN) {
            if(historyIndex < history.length) ++historyIndex;
            if(historyIndex < history.length) prompt.textContent = history[historyIndex];
            else prompt.textContent = " ";
            changedPrompt = true;
        }
        
        if(changedPrompt) {
            var range = document.createRange();
            var sel = window.getSelection();
            range.setStart(prompt.childNodes[0], prompt.textContent.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };

    var autoCompleteInput = function(input) {
        var cmds        = commands,
            re          = new RegExp("^" + input, "ig"),
            suggestions = [];
        console.log("*" + input + "*", cmds);
        for(var cmd in cmds) {
            console.log(cmd);
            if(cmds.hasOwnProperty(cmd) && cmd.match(re)) {
                suggestions.push(cmd);
            }
        }
        return suggestions;
    };
    // Terminal functions

    self.init = function(elem) {
        
        elem.addEventListener("keydown", function(event) {
            if(event.keyCode == 9) { //TAB was hit
                var prompt = event.target;
                var suggestions = autoCompleteInput(prompt.textContent.replace(/\s+/g, ""));
                
                if(suggestions.length == 1) {
                    prompt.textContent = suggestions[0];
                    var range = document.createRange();
                    var sel = window.getSelection();
                    range.setStart(prompt.childNodes[0], suggestions[0].length);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
                
                event.preventDefault(true);
                return false;
            }
        });
        
        elem.addEventListener("keyup", function(event) {
            if(historyIndex < 0) return;
            
            browseHistory(event.target, event.keyCode);
        });
        
        elem.addEventListener("keypress", function(event) {
            var prompt = event.target;
            if(event.keyCode != 13) return false;
            
            updateHistory(prompt.textContent.replace(/^\s+|\s+$/g, "")); 
            
            var input = prompt.textContent.replace(/^\s+|\s+$/g, "").split(" ");
            if(input[0] && input[0] in commands) {
                runCommand(elem, input[0], input);
            }

            resetPrompt(elem, prompt);
            event.preventDefault();
        });
        
        elem.querySelector(".input").focus();
    };
    
    return self;
})();
