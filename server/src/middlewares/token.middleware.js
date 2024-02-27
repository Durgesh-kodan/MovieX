import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";

const tokenDecode = (req) => {
  try {
    const bearedHeader = req.headers["authorization"];
    if (bearedHeader) {
      const token = bearedHeader.split(" ")[1];
      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET_KEY);
    }

    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if (!tokenDecoded) return responseHandler.unauthorise(res);

  const user = await userModel.findById(tokenDecoded.data);
  if (!user) return responseHandler.unauthorise(res);

  req.user();
  next();
};

export default { auth, tokenDecode };
