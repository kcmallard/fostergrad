Meteor.methods({
  send_email: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schemas.Message);

    // Build the e-mail text
    var text = "name: " + doc.name + "\n\n"
            + "email: " + doc.email + "\n\n\n\n"
            + "phone_number" + doc.phone_number
            + "message" + doc.message;

    this.unblock();

    // Send the e-mail
    Email.send({
        to: "mallardcybersolutions@gmail.com",
        from: doc.email,
        subject: "Website Contact Form - Message From " + doc.name,
        text: text
    });
		console.log("Sent email from " + doc.email);
  }
});