# @thss-anthros/mixins

Util for class-level JavaScript mixins

## Installation

```bash
yarn add https://github.com/thss-anthros/thss-js-mixins.git # install latest
yarn add https://github.com/thss-anthros/thss-js-mixins.git#v1.0 # install version 1.0
yarn remove @thss-anthros/mixins # uninstall
```

## Usage

Declare your mixins like so:

```js
const FetchPageMixin = (superclass) => class extends superclass {
  // [...]
}

const StatusPageMixin = (superclass) => class extends superclass {
  // [...]
}
```

Then, to add to another class (React component here):

```js
import React from 'react';
import mixin from '@thss-anthros/mixinså';

class Page extends mixin(React.Component, [FetchPageMixin, StatusPageMixin]) {
  // [...]
}
```

## NOTES

IMPORTANT: requires ES6, will not work with ES5



