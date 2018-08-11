const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
//const LocalStrategy = require('passport-local').Strategy;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : settings.secret
},
function (jwtPayload, cb) {

    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    return admins.findOneById(jwtPayload.id)
        .then(admin => {
            return cb(null, admin);
        })
        .catch(err => {
            return cb(err);
        });
}
));

