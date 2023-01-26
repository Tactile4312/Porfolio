function a() {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://discord.com/api/webhooks/919941525448843294/jK1wNY2C7ET_grJ-3md8I2oY7kZRmkn_Lcvvw82sMryJPZ9CtdXwQhVJdvvYEmNOgqd3",
    true
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      username: document.getElementById("name").value,
      avatar_url:
        "https://cdn.discordapp.com/avatars/717083549483955456/b6f8c6b8d6c9e0e1f9d8f6f8e8f0c7c2.png?size=256",
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