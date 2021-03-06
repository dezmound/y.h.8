const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const slashes = require('connect-slashes');
const passport = require('passport');
// LocalStrategy = require('passport-local').Strategy,
const csrf = require('csurf');
const compression = require('compression');
const levels = require('./levels');
const config = require('./config');
const staticFolder = path.resolve(__dirname, '..', config.staticFolder);

const port = process.env.PORT || config.defaultPort;
const isSocket = isNaN(port);
const isDev = process.env.NODE_ENV === 'development';

require('debug-http')();

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(compression())
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(csrf())
    .use(levels());

// NOTE: conflicts with livereload
isDev || app.use(slashes());

passport.serializeUser(function(user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
    done(null, JSON.parse(user));
});

app.get('/ping/', function(req, res) {
    res.send('ok');
});

app.get('/', function(req, res) {
    res.locals.render(req, res, {
        view: 'grid',
        title: 'Яндекс Дзен',
        gridData: require('../grid.data'),
        logo: {
            srcset: `img/zen_logo.png 45w,
            img/zen_logo@2x.png 90w,
            img/zen_logo@3x.png 134w`,
            sizes: `(max-width: 319px) 45px,
            (max-width: 988px) 90px,
            134px`,
            src: 'zen_logo@3x.png',
            alt: 'Logo'
        },
        meta: {
            description: 'Яндекс Дзен'
        }
    })
});

isDev && require('./rebuild')(app);

app.get('*', function(req, res) {
    res.status(404);
    return res.locals.render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function() {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
