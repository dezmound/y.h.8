const MobileDetect = require('mobile-detect');
module.exports = () => {
    /**
     * @param {Request} req
     * @param {Response} res
     * @param {callbackfn} next
     */
    const levels = (req, res, next) => {
        const md = new MobileDetect(req.headers['user-agent']);
        const isDesktop = !md.mobile() && !md.tablet();
        const Render = require('./render')(isDesktop ? 'desktop': 'mobile');
        res.locals.render = Render.render;
        res.locals.dropCache = Render.dropCache;
        next();
    }
    return levels;
}