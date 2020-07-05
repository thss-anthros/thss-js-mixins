const mixin = (superclass, mixins) => {
  let target = superclass;

  mixins.forEach((mixin) => {
    target = class extends mixin(target) {};
  });

  return target;
}

export default mixin;