Blockly.Blocks['movingswitch'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Berjalan")
		  .appendField(new Blockly.FieldDropdown([["Atas","up"], ["Bawah","down"], ["Kiri","left"], ["Kanan","right"]]), "turndirection");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
	}
};

Blockly.JavaScript['movingswitch'] = function(block) {
	var dropdown_turndirection = block.getFieldValue('turndirection');
	if (dropdown_turndirection === "up") {
		var top = $("#image").css("top");
		var turn = parseInt(parseInt(top)-100 +'px');
		var code = "document.getElementById('image').style.top="+turn+";"
	}
	if (dropdown_turndirection === "down") {
		var down = $("#image").css("top");
		var turn = parseInt(parseInt(down)+100 +'px');
		var code = "document.getElementById('image').style.top="+turn+";"
	}
	if (dropdown_turndirection === "left") {
		var left = $("#image").css("left");
		var turn = parseInt(parseInt(left)-100 +'px');
		var code = "document.getElementById('image').style.left="+turn+";"
	}
	if (dropdown_turndirection === "right") {	
		var right = $("#image").css("left");	
		var turn = parseInt(parseInt(right)+100 +'px');
		var code = "document.getElementById('image').style.left="+turn+";"
	}
	code += "\n";
	return code;
};