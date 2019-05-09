/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
// * 1. Global Binding - the value of this in the global scope will refer to window or console Object.
* 2. Implicit Binding - the value of this will refer to the object preceding the dot the function was called after.
* 3. New Binding - In the case of a constructor(construction function), this refers to the specific instance
                  of the object that is created and returned by the constructor function.
* 4. Explicit Binding - this gets explicitly defined when call or apply methods of JS are 
                  called or applied on the object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(`Just give me this -> `, this);
// OR
function logGlobalThis(globe) {
  console.log("This from logGlobalThis -> ", this);
  return globe;
}

logGlobalThis("some globe");

// Principle 2

// code example for Implicit Binding
const implicitThisObj = {
  name: "Implicit This",
  getThis: function() {
    console.log(`This is an implicit this named *${this.name}* -> `, this);
  }
};

implicitThisObj.getThis();

// Principle 3

// code example for New Binding
function Logger(statement) {
  this.statement = statement;
}
Logger.prototype.logs = function() {
  console.log(`What you want to be logged is -> ${this.statement}`);
  console.log(this);
};

const superLogger = new Logger("super logger");
superLogger.logs();

// Principle 4

// code example for Explicit Binding
const awesomeLogger = new Logger("awesome logger");
const awesomeLoggerLogs = awesomeLogger.logs;
awesomeLoggerLogs.call(awesomeLogger);
