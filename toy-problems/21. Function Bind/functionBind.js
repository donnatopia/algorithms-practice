const bind = (fn, context, ...args) => {
  return (...additionalArgs) => fn.apply(context, args.concat(additionalArgs))
};

module.exports = bind;
