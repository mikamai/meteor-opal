# meteor-opal

Meteor support for Opal, the Ruby to Javascript Compiler

# DISCLAIMER

**this is alpha quality code**, it's not tested and not ready for production.

## What's Opal?

[Opal](http://opalrb.org) is a ruby to javascript compiler, an implementation of the ruby corelib and stdlib, and associated gems.   

## Installation

```
meteor add massimoronca:opal
```

Opal is supported on both the client and the server.  
Files ending with `.rb` or `.js.rb` are automatically compiled to JavaScript.

## Javascript interoperability

See the [compiled ruby section](http://opalrb.org/docs/compiled_ruby/) on Opal website.   
Opal uses it's own global namespace, therefore classes and functions created using Opal, are immediatley available across every other module and/or package in the application, provided you use Opal or the Javascript equivalent `Opal.<item>`.   
For example the class `User` defined above will be accessible as `User` in Opal and as `Opal.User` in Javascript.  
All functions are compiled with a `$` sign in front of the name, so method `new` of class `User` becomes `Opal.User.$new` and function `b` `Opal.Object.$b` (functions resides in the Object namespace).   

## Namespacing and Opal

All Opal classes/functions will be globally available to all other modules through the Opal's own private namespace.

## Usage

```ruby
class User
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def admin?
    @name == 'Admin'
  end
end

def a
    123
end

$b = 321 # global variable

user = User.new('Bob')
puts user # #<User:???>
puts user.admin? # false
puts "Hello from #{user.name}!" # Hello from Bob!

puts a # 123
puts $b # 321

```

```javascript
// somewhere else in Javascript

var user = Opal.User.$new('Bob');
console.log(user); //  { _id: ??, name: 'Bob' }
console.log(user['$admin?']()); // false 
                                // functions names cannot end in ? 
                                // so we access them as properties
console.log('Hello from ' + user.$name() + '!'); // Hello from Bob!

// function call
console.log(Opal.Object.$a()); // 123

// global variable
console.log(Opal.gvars.b); // 321
```
