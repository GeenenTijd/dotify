node-dotify
======

[![Build Status](https://travis-ci.org/GeenenTijd/dotify.svg?branch=master)](https://travis-ci.org/GeenenTijd/dotify)

Convert Object

    {
      status: 'success',
      name: {
        first: 'Glenn',
        last: 'Geenen'
      }
    }

to (Dot notation object)

    {
      status: 'success',
      'name.first': 'Glenn',
      'name.last': 'Geenen'
    }

### usage

    var dotify = require('node-dotify');

    var obj = {
      status: 'success',
      name: {
        first: 'Glenn',
        last: 'Geenen'
      }
    };

    var result = dotify(obj);
