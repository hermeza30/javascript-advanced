
/**
 *So what's the difference between the two? The key difference is that in will return true for inherited properties, whereas hasOwnProperty() will return false for inherited properties.

For example, the Object base class in JavaScript has a __proto__ property, a constructor property, and a hasOwnProperty function. The in operator will return true for these properties, but hasOwnProperty() will return false.
 *
 * @class BaseClass
 */


'constructor' in obj; // true
'__proto__' in obj; // true
'hasOwnProperty' in obj; // true

obj.hasOwnProperty('constructor'); // false
obj.hasOwnProperty('__proto__'); // false
obj.hasOwnProperty('hasOwnProperty'); // false

/**
 *
 * Because hasOwnProperty() ignores inherited properties, it is the better choice for plain old JavaScript objects (POJOs). However, hasOwnProperty() will return false for ES6 class getters and methods, like ES6 getters.
 *
 * @class BaseClass
 */
class BaseClass {
    get baseProp() {
      return 42;
    }
  }
  class ChildClass extends BaseClass {
    get childProp() {
      return 42;
    }
  }
  const base = new BaseClass();
  const child = new ChildClass();
  
  'baseProp' in base; // true
  'childProp' in child; // true
  'baseProp' in child; // true
  
  base.hasOwnProperty('baseProp'); // false
  child.hasOwnProperty('childProp'); // false
  child.hasOwnProperty('baseProp'); // false