var express = require('express');
const mail = require("@sendgrid/mail");
var router = express.Router();

/* GET home page. */


router.post('/', function (req, res, next) {
    let name = req.body.name
    let email = req.body.email
    let gender = req.body.gender
    let university = req.body.university
    let workshop = req.body.workshop

    const mail = require("@sendgrid/mail")

    mail.setApiKey(/*api*/);

    const msg = {
        to: email,
        from: "engmohamedsaeed19@gmail.com",
        subject: "Sending from IEEE",
        html: "<head>\n" +
            "  <title></title>\n" +
            "  <!--[if !mso]><!-- -->\n" +
            "  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
            "  <!--<![endif]-->\n" +
            "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
            "<style type=\"text/css\">\n" +
            "  #outlook a { padding: 0; }\n" +
            "  .ReadMsgBody { width: 100%; }\n" +
            "  .ExternalClass { width: 100%; }\n" +
            "  .ExternalClass * { line-height:100%; }\n" +
            "  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }\n" +
            "  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }\n" +
            "  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }\n" +
            "  p { display: block; margin: 13px 0; }\n" +
            "</style>\n" +
            "<!--[if !mso]><!-->\n" +
            "<style type=\"text/css\">\n" +
            "  @media only screen and (max-width:480px) {\n" +
            "    @-ms-viewport { width:320px; }\n" +
            "    @viewport { width:320px; }\n" +
            "  }\n" +
            "</style>\n" +
            "<!--<![endif]-->\n" +
            "<!--[if mso]>\n" +
            "<xml>\n" +
            "  <o:OfficeDocumentSettings>\n" +
            "    <o:AllowPNG/>\n" +
            "    <o:PixelsPerInch>96</o:PixelsPerInch>\n" +
            "  </o:OfficeDocumentSettings>\n" +
            "</xml>\n" +
            "<![endif]-->\n" +
            "<!--[if lte mso 11]>\n" +
            "<style type=\"text/css\">\n" +
            "  .outlook-group-fix {\n" +
            "    width:100% !important;\n" +
            "  }\n" +
            "</style>\n" +
            "<![endif]-->\n" +
            "\n" +
            "<!--[if !mso]><!-->\n" +
            "    <link href=\"https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700\" rel=\"stylesheet\" type=\"text/css\">\n" +
            "    <style type=\"text/css\">\n" +
            "\n" +
            "        @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);\n" +
            "\n" +
            "    </style>\n" +
            "  <!--<![endif]--><style type=\"text/css\">\n" +
            "  @media only screen and (min-width:480px) {\n" +
            "    .mj-column-per-100, * [aria-labelledby=\"mj-column-per-100\"] { width:100%!important; }\n" +
            "  }\n" +
            "</style>\n" +
            "</head>\n" +
            "<body style=\"background: #F9F9F9;\">\n" +
            "  <div style=\"background-color:#F9F9F9;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]-->\n" +
            "  <style type=\"text/css\">\n" +
            "    html, body, * {\n" +
            "      -webkit-text-size-adjust: none;\n" +
            "      text-size-adjust: none;\n" +
            "    }\n" +
            "    a {\n" +
            "      color:#1EB0F4;\n" +
            "      text-decoration:none;\n" +
            "    }\n" +
            "    a:hover {\n" +
            "      text-decoration:underline;\n" +
            "    }\n" +
            "  </style>\n" +
            "<div style=\"margin:0px auto;max-width:640px;background:transparent;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:transparent;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 0px;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:top;width:640px;\">\n" +
            "      <![endif]--><div aria-labelledby=\"mj-column-per-100\" class=\"mj-column-per-100 outlook-group-fix\" style=\"vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\"><tbody><tr><td style=\"word-break:break-word;font-size:0px;padding:0px;\" align=\"center\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;border-spacing:0px;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"width:138px;\"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]-->\n" +
            "      <!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]--><div style=\"max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden\"><div style=\"margin:0px auto;max-width:640px;background:#7289DA url() top center / cover no-repeat;\"><!--[if mso | IE]>\n" +
            "      <v:rect xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"true\" stroke=\"false\" style=\"width:640px;\">\n" +
            "        <v:fill origin=\"0.5, 0\" position=\"0.5,0\" type=\"tile\" src=\"\" />\n" +
            "        <v:textbox style=\"mso-fit-shape-to-text:true\" inset=\"0,0,0,0\">\n" +
            "      <![endif]--><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:#7289DA url() top center / cover no-repeat;\" align=\"center\" border=\"0\" background=\"https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png\"><tbody><tr><td style=\"text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:57px;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:undefined;width:640px;\">\n" +
            "      <![endif]--><div style=\"cursor:auto;color:white;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:36px;font-weight:600;line-height:36px;text-align:center;\">Welcome to IEEE!</div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table><!--[if mso | IE]>\n" +
            "        </v:textbox>\n" +
            "      </v:rect>\n" +
            "      <![endif]--></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]-->\n" +
            "      <!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]--><div style=\"margin:0px auto;max-width:640px;background:#ffffff;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:#ffffff;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:top;width:640px;\">\n" +
            "      <![endif]--><div aria-labelledby=\"mj-column-per-100\" class=\"mj-column-per-100 outlook-group-fix\" style=\"vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\"><tbody><tr><td style=\"word-break:break-word;font-size:0px;padding:0px 0px 20px;\" align=\"left\"><div style=\"cursor:auto;color:#737F8D;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;\">\n" +
            "            <p><img src=\"https://cdn.discordapp.com/email_assets/127c95bbea39cd4bc1ad87d1500ae27d.png\" alt=\"Party Wumpus\" title=\"None\" width=\"500\" style=\"height: auto;\"></p>\n" +
            "\n" +
            "  <h2 style=\"font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;\">Hey ,</h2>\n" +
            "<p>Click on the button to verify your account</p>\n" +
            "\n" +
            "          </div></td></tr><tr><td style=\"word-break:break-word;font-size:0px;padding:10px 25px;\" align=\"center\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"border:none;border-radius:3px;color:white;cursor:auto;padding:15px 19px;\" align=\"center\" valign=\"middle\" bgcolor=\"#7289DA\"><a href=\"#\" style=\"text-decoration:none;line-height:100%;background:#7289DA;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;font-weight:normal;text-transform:none;margin:0px;\" target=\"_blank\">\n" +
            "            Verify Email\n" +
            "          </a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]-->\n" +
            "      <!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]--></div><div style=\"margin:0px auto;max-width:640px;background:transparent;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:transparent;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:top;width:640px;\">\n" +
            "      <![endif]--><div aria-labelledby=\"mj-column-per-100\" class=\"mj-column-per-100 outlook-group-fix\" style=\"vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\"><tbody><tr><td style=\"word-break:break-word;font-size:0px;\"><div style=\"font-size:1px;line-height:12px;\">&nbsp;</div></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]-->\n" +
            "      <!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]--><div style=\"margin:0 auto;max-width:640px;background:#ffffff;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:#ffffff;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"text-align:center;vertical-align:top;font-size:0px;padding:0px;\"><!--[if mso | IE]>\n" +
            "      <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:top;width:640px;\">\n" +
            "      <![endif]--><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]-->\n" +
            "      <!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"640\" align=\"center\" style=\"width:640px;\">\n" +
            "        <tr>\n" +
            "          <td style=\"line-height:0px;font-size:0px;mso-line-height-rule:exactly;\">\n" +
            "      <![endif]--><div style=\"margin:0px auto;max-width:640px;background:transparent;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size:0px;width:100%;background:transparent;\" align=\"center\" border=\"0\"><tbody><tr><td style=\"text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:20px 0px;\"><!--[if mso | IE]>\n" +
            "      <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td style=\"vertical-align:top;width:640px;\">\n" +
            "      <![endif]--><div aria-labelledby=\"mj-column-per-100\" class=\"mj-column-per-100 outlook-group-fix\" style=\"vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" border=\"0\"><tbody><tr><td style=\"word-break:break-word;font-size:0px;padding:0px;\" align=\"center\"><div style=\"cursor:auto;color:#99AAB5;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;\">\n" +
            "      Sent by IEEE • <a href=\"https://blog.discordapp.com/\" style=\"color:#1EB0F4;text-decoration:none;\" target=\"_blank\">check our blog</a> • <a href=\"https://twitter.com/discordapp\" style=\"color:#1EB0F4;text-decoration:none;\" target=\"_blank\"></a>\n" +
            "    </div></td></tr><tr><td style=\"word-break:break-word;font-size:0px;padding:0px;\" align=\"center\"><div style=\"cursor:auto;color:#99AAB5;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:12px;line-height:24px;text-align:center;\">\n" +
            "      444 De Haro Street, Suite 200, San Francisco, CA 94107\n" +
            "    </div></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>\n" +
            "      </td></tr></table>\n" +
            "      <![endif]--></div>\n" +
            "\n" +
            "</body>"
    };

    mail.send(msg).then((res) => {
        console.log(res[0].statusCode)
    }).catch((err) => {
        console.log(err)
    })

    res.render('index', {name: name, email: email, gender: gender, university: university, workshop: workshop});
});

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
