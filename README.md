# HTTP sink

A HTTP sink, used for testing and prototyping. A HTTP endpoint that responds
with a 204 No Content HTTP status code for any request thrown at it.

Give it a try:

```sh
$ curl -I https://http-sink.chriswrench.dev/some-random-path
HTTP/1.1 204 No Content

```

## Deploy your own HTTP sink

Deploy your own version of HTTP sink using [Cloudflare Workers][]:

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cgwrench/http-sink)

[Cloudflare Workers]: https://developers.cloudflare.com/workers/
