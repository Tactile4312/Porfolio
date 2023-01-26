function a() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://discord.com/api/webhooks/1068258827734089769/zxSgr3H6YWv1Lj8BqcV75mKazrXICQxVBPYahdnYmmeRLdM5Nc61RXyF-5Hh6H9htIhP",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: document.getElementById("name").value,
      avatar_url:
        "https://cdn.discordapp.com/attachments/1068258794523599030/1068259009754304532/ME.jpg",
      content:
        "Email: " +
        document.getElementById("email").value +
        "\n" +
        "Subject: " +
        document.getElementById("subject").value +
        "\n" +
        "Message: " +
        document.getElementById("message").value,
    })
  );

  //send an alert to the user
   alert("Message Sent");
}