# @thss/js-mixins

Util for class-level JavaScript mixins

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
import mixin from '@thss/mixins';

class Page extends mixin(React.Component, [FetchPageMixin, StatusPageMixin]) {
  // [...]
}
```

## NOTES

IMPORTANT: requires ES6, will not work with ES5



