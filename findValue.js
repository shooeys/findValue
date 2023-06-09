function getValueFromSpreadsheet() {
    var sheet = SpreadsheetApp.openById('1892219054').getSheetByName('Sheet1');
    var value = sheet.getRange(309, 2).getValue();
    return value;
  }
  
  console.log(value);
