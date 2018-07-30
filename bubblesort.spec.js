describe('Bubble Sort Edge Cases', function(){
  let array;

  beforeEach(function(){
    array = [2];
  });

  it("handles an empty array", function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it("Should return a single item, when input is a single itme", function(){
    expect( bubbleSort(array)).toEqual([2]);
  });

});

describe('Bubble Sort Multi Value', function(){
  let array;
  let arrayLength;
  let returnLength;
  let whatAmI;


  beforeEach(function(){
    array = [5,8,2,6,4];
    console.log("This our test array" , array);
    console.log("This is array.length", array.length);
    //arrayLength = array.length;
    returnLength = bubbleSort(array).length;
    whatAmI = jasmine.createSpy('whatAmI');

    //whatAmI("I", "am", "a", "spy");
  });



  it("returns the same number of values as input array", function(){
    expect(array.length).toEqual(bubbleSort(array).length);
  })

  it("returns the array sorted", function(){
    expect(bubbleSort(array)).toEqual([2,4,5,6,8]);
  })

  it("How many times we looped in our Four Loop", function(){
    console.log(whatAmI.calls.count())
    expect(whatAmI.calls.count()).toEqual(whatAmI.calls.count());
  });

});
