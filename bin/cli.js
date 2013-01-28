#!/usr/bin/env node
var cc = require('config-chain')
  , argv = require('optimist').argv
  , server = require('../server')

var config = cc( argv
  , argv.config
  , cc.find('config.json')
  , cc.env('gab_')
  , { p: 4242
    }
  )

server(config.store)

