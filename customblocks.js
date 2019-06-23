Blockly.Blocks['lightswitch'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Menyalakan lampu")
		  .appendField(new Blockly.FieldDropdown([["merah","red"], ["kuning","yellow"], ["hijau","green"], ["semua","all"]]), "lightcolor")
		  .appendField(new Blockly.FieldDropdown([["hidup","on"], ["mati","off"]]), "switch");
	  this.setInputsInline(false);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

Blockly.JavaScript['lightswitch'] = function(block) {
	var dropdown_lightcolor = block.getFieldValue('lightcolor');
	var dropdown_switch = block.getFieldValue('switch');
	var dropdown_lightcolor = block.getFieldValue('lightcolor');
	var dropdown_switch = block.getFieldValue('switch');
	if (dropdown_lightcolor === "all") {
		if (dropdown_switch === "on") {
			var code = "$('#red').css('background-color', 'red');"
			code += "$('#green').css('background-color', 'green');";
			code += "$('#yellow').css('background-color', 'yellow');";
		}
		if (dropdown_switch === "off") {
			var code = "$('#red').css('background-color', 'white');"
			code += "$('#green').css('background-color', 'white');";
			code += "$('#yellow').css('background-color', 'white');"; 
		}
	}
	else {
		if (dropdown_switch === "on") {
			var code = "$('#"+dropdown_lightcolor+"').css('background-color', '"+dropdown_lightcolor+"');"
		}
		if (dropdown_switch === "off") {
			var code = "$('#"+dropdown_lightcolor+"').css('background-color', 'white');"
		}
	}
	return code;
  };