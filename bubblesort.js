

function bubbleSort(_value){

  let pointer = _value.length;

  do{

      for(let x = 0; x < pointer; x++){
        whatAmI();
        if((_value[x] > _value[x+1]) && _value[x+1]){
          let temp = _value[x+1];
          _value[x+1] = _value[x];
          _value[x] = temp;
        }
      }
    pointer--;

  } while(pointer>0);

 // }
  return _value;
}
