function run() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      console.log(data[i][j])
    }
  }
  
}

function parseData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    email = data[i][1];
    name = data[i][2];
    title = data[i][3];

    const user = createUser(name,email,title);

    try {
      sendTicket(user)
    } catch (err) {
      Logger.log(err.message);
    }

  }

}

function createUser(name,email,title) {
  let user = {
    userName: name,
    userEmail: email,
    userTitle: title,
    userDetails: function() {
      return `
        ${this.userName}
        ${this.userEmail}
        ${this.userTitle}
      `
    }
  }
  return user
}

function sendTicket(user) {
  
  try {
    const ticketSystemEmail = 'ticket_system_email@email.com';
    const subject = `New Employee | ${user.userName} | Starting XYZ`;
    const body = user.userDetails();
    GmailApp.sendEmail(ticketSystemEmail,subject,body)
  } catch(err) {
    console.log(err.message);
  }

}
