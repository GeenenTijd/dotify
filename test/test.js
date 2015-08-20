'use strict';

var assert = require('assert');
var dotify = require('../dotify');

describe('Test Dotify', function testMapUpdate() {

  it('test deep nested object', function testDeepNested() {

    var obj = {
      cool: 'man',
      parent: {
        with: {
          child: 'Tom'
        }
      },
      other: {
        parent: {
          with: {
            child1: 'Me',
            child2: 'You'
          },
          name: 'Daddy'
        }
      }
    };

    var result = dotify(obj);

    assert.equal(result.cool, 'man');
    assert.equal(result['parent.with.child'], 'Tom');
    assert.equal(result['other.parent.with.child1'], 'Me');
    assert.equal(result['other.parent.with.child2'], 'You');
    assert.equal(result['other.parent.name'], 'Daddy');

  });

  it('test array', function testArray() {

    var obj = {
      cool: 'man',
      parent: {
        with: {
          child: 'Tom'
        }
      },
      other: {
        parent: {
          children: ['Me', 'You'],
          name: 'Daddy'
        }
      }
    };

    var result = dotify(obj);

    assert.equal(result.cool, 'man');
    assert.equal(result['parent.with.child'], 'Tom');
    assert.equal(result['other.parent.children.0'], 'Me');
    assert.equal(result['other.parent.children.1'], 'You');
    assert.equal(result['other.parent.name'], 'Daddy');

  });

  it('test nested array', function testArray() {

    var obj = {
      parent: {
        children: [{
          name: 'Me',
          children: [{
            name: 'You'
          }, {
            name: 'Mike',
            key: 'value'
          }]
        }],
        name: 'Daddy'
      }
    };

    var result = dotify(obj);

    assert.equal(result['parent.children.0.name'], 'Me');
    assert.equal(result['parent.children.0.children.0.name'], 'You');
    assert.equal(result['parent.children.0.children.1.name'], 'Mike');
    assert.equal(result['parent.children.0.children.1.key'], 'value');
    assert.equal(result['parent.name'], 'Daddy');

  });

});
