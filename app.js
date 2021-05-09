const render = require('./lib/render');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const router = require('@koa/router')();

const Koa = module.exports = require('koa')
const app = new Koa()

app.use(render)

// Middleware
app.use(logger())
app.use(render)
app.use(koaBody())

// Routers
router.get('/tabs', tabs)

app.use(router.routes())

// View Controllers
async function tabs(ctx) {
	await ctx.render('tabs')
}

if (!module.parent) app.listen(3000);