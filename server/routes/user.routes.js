const UserController = require("../controllers/user.controller");
const jwtMiddleware = require("../middleware/jwt.middleware");

module.exports = (app) => {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/protected", jwtMiddleware.authenticate);
    app.post("/api/logout", UserController.logout);
};
