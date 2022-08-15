try {
  // eslint-disable-next-line no-undef
  module.exports = window || {
    __ONEKEY_CONNECT_SRC: null,
    location: {
      protocol: 'https',
    },
    addEventListener: (_) => false,
    setTimeout: (_) => false,
  };
} catch (e) {
  module.exports = {
    __ONEKEY_CONNECT_SRC: null,
    location: {
      protocol: 'https',
    },
    addEventListener: (_) => false,
    setTimeout: (_) => false,
  };
}
