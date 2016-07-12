class StaticMethodCall {
    static staticMethod() {
        console.log("Static method has been called");
    }
    static anotherStaticMethod() {
        console.log(this.staticMethod() + " from another static method");
    }
}
StaticMethodCall.staticMethod(); 
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod(); 
// 'Static method has been called from another static method'