import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {

   var currentValue: Float = 200;
  // currentValue := 100;

  Debug.print(debug_show(currentValue));

    var startTime = Time.now();


  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withDraw(amount: Float) {
    if(amount <= currentValue) {
      currentValue -= amount;
      Debug.print(debug_show(amount) # "Withdraw!!");
    } else {
      Debug.print("Insufficent Balence");
    }
  };

  public query func checkBalence(): async Float {
    return currentValue;
  };

  public func compound() {
    let currentTime = Time.now();
    let timeNS = currentTime - startTime;
    let timeS = timeNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeS));
  };
}
