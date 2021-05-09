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
router.get('/text', splitText)

app.use(router.routes())

async function splitText(ctx) {
	await ctx.render('text')
}

if (!module.parent) app.listen(8000);