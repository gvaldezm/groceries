$(function() {
  $("form").submit(function(event){
    var inputs = [1,2,3,4];
    var array1 = [];
    inputs.forEach(function(inputNumber){
      array1.push($("input#listItem"+inputNumber).val());
    })
    // var item2Input = $("input#listItem2").val();
    // var item3Input = $("input#listItem3").val();
    // var item4Input = $("input#listItem4").val();
    // var listTypeInput=$("input:radio[name=listType]:checked").val();
    //
    // var array1 =  [item1Input,item2Input,item3Input,item4Input];

    var arrayUpper = array1.map(function(list){
      return list.toUpperCase();
    });
    var arrayStr = arrayUpper.map(function(listStr){
      return listStr.toString();
    });
    var arraySort = arrayStr.map(function(listSort){
      return listSort.sort();
    });
    alert(arraySort);
    //alert(arraySort);
    event.preventDefault();
  })


});
