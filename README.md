# Koa Method Override

### Overview

Method override middleware for Koa. It supports two override methods:

* Form
* HTTP header

**Form:**

```html
<form action="" method="POST">
  <input type="hidden" name="_method" value="PUT" />
</form>
```

The `name` field is defaulted to `_method`. You can customize this.


**HTTP Header:**

It checks if the HTTP header `X-HTTP-Method-Override` exists.


## Install

NPM:

```bash
npm install koa-method-override
```

## Dependencies

* [koa-body-parser](https://github.com/jonathanong/koa-body-parser)

**Note:** You need to include the body parser's context __before__ the method override.

## Usage

```js
var methodOverride = require("koa-method-override");

var koa = require('koa');
var app = koa();

// Include the body parser context
app.context(require('koa-body-parser'));

// Use the middleware.
app.use(methodOverride());
```

You may specify the form key to be used:

```js
app.use(methodOverride('someRandomKey'));
```

This overrides the `method` key within the context.

```js
this.method // Will be overriden with the new HTTP method.
```

The original method that was actually used is now stored under:

```js
this.originalMethod
```

**Note:** `this.method`, once overriden, will be lowercased.


## License

The MIT License (MIT)

Copyright (c) 2013 Daniel Fagnan <dnfagnan@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.