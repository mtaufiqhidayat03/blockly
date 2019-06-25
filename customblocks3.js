Blockly.Blocks['turn_north'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("berjalan ke utara");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.JavaScript['turn_north'] = function(block) {
	var top = $("#image").css("top");
	var turn = parseInt(parseInt(top)-100 +'px');
	if (turn <= 0) {
		turn = 0;
	} else {
		turn = turn;
	}
	var code = "document.getElementById('image').style.top="+turn+";"
	code += "\n";
	return code;
  };

  Blockly.Blocks['turn_south'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("berjalan ke selatan");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(270);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.JavaScript['turn_south'] = function(block) {
	var top = $("#image").css("top");
	var turn = parseInt(parseInt(top)+100 +'px');
	if (turn <= 490) {
		turn = turn;
	} else {
		turn = 490;
	}
	var code = "document.getElementById('image').style.top="+turn+";"
	code += "\n";
	return code;
  };

  Blockly.Blocks['turn_west'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("berjalan ke barat");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.JavaScript['turn_west'] = function(block) {
	var left = $("#image").css("left");
	var turn = parseInt(parseInt(left)-100 +'px');
	if (turn <= 0) {
		turn = 0;
	} else {
		turn = turn;
	}
	var code = "document.getElementById('image').style.left="+turn+";"
	code += "\n";
	return code;
  };

  Blockly.Blocks['turn_east'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("berjalan ke timur");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setColour(300);
   this.setTooltip("");
   this.setHelpUrl("");
	}
  };

  Blockly.JavaScript['turn_east'] = function(block) {
	var left = $(".image").css("left");
	var turn = parseInt(parseInt(left)+100 +'px');
	if (turn >= 590) {
		turn = 590;
	} else {
		turn = turn;
	}
	var code = "document.getElementById('image').style.left="+turn+";"
	code += "\n";
	return code;
  };