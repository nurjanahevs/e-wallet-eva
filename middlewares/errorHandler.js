module.exports = (err, res) => {
  console.log(err)
  let code = 0;
  let name = err.name;
  let message = "";

  switch (name) {
    case "INVALID_TOKEN":
      code = 401;
      message = "Invalid Token";
      break;
    case "UNAUTHORIZED_TOKEN":
      code = 401;
      message = "Unauthorized";
      break;
    case "UNAUTHORIZED":
      code = 401;
      message = "email & password tidak match";
      break;
    case "NOT_FOUND_ALL":
      code = 404;
      message = "Data Tidak Ada";
      break;
    case "NOT_FOUND_SPECIFIC":
      code = 404;
      message = "Data yang dicari Tidak Ditemukan";
      break;
    case "Missing_Token":
      code = 401;
      message = "Akses Token Hilang";
      break;
    default:
      code = 500;
      message = "Internal Server Error";
  }

  res.status(code).json({ success: false, message: message });
};


