/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */
/* eslint-env node */
const occTestConfig = require('@oracle-cx-commerce/test/config.unit')

module.exports = Object.assign(occTestConfig, {
  coverageThreshold: {
    global: {
      statements: 1,
      branches: 1,
      functions: 1,
      lines: 1
    }
  }
})
