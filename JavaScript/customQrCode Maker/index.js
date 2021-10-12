var qrcode = new QRCode("qrcode", {
  colorDark: "#000",
  colorLight: "#fff",
});


const makeCode = () => {
  var Text = document.getElementById("text");

  if (!Text.value) {
    alert("Input a text");
    Text.focus();
    return;
  }

  qrcode.makeCode(Text.value);
};

makeCode();

$("#text")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });