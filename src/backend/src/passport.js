import passport from 'passport'
import passportGoogle from "passport-google-oauth20"
import passportFacebook from "passport-facebook"
import passportGithub from "passport-github2"

const GoogleStrategy = passportGoogle.Strategy
const GithubStrategy = passportGithub.Strategy
const FacebookStrategy = passportFacebook.Strategy

const GOOGLE_CLIENT_ID = "147972840066-do8fs94ibcrobhjgrjabqd0qdf53t3tk.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "7ac25d0d9f7f018a4ec0"
const GITHUB_CLIENT_SECRET = "797333497e01ee601cfe1b4ce9954d1e667e126f"

const FACEBOOK_APP_ID = "543906484618865"
const FACEBOOK_APP_SECRET = "f2b82865e34f237b711ee605eef1e816"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile)
    }
))

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/github/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/facebook/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})