var x,y,z,a,b,c;
let colors1 = ['cyan', 'gray','yellow', 'pink', 'white', 'mint', 'aqua', 'seagreen', 'coral'];
let colors2 = ['blue', 'gold', 'purple', 'brown', 'black', 'yellowgreen', 'orange', 'green', 'red'];
let randomColor1;
let randomColor2;
let randomColor3;
var container1;
var container2;
var container3;
                    function calc(){
                        randomColor1 = colors1[Math.floor(Math.random()*colors1.length)];
                        randomColor2 = colors2[Math.floor(Math.random()*colors2.length)];
                        container1 = document.querySelector('#formWrapper');
                        container2 = document.querySelector('#formWrapper');
                        container1.style.background = randomColor1;
                        container2.style.color = randomColor2;
                        const num1= parseInt(document.getElementById('first').value);
                        const num2 = parseInt(document.getElementById('second').value);
                        const num3 = parseInt(document.getElementById('third').value);
                        x = num1;
                        y = num2;
                        z = num3;
                        min();
                        max();
                        mean();
                        median();
                        range();

                        if(isNaN(x) || isNaN(y)||isNaN(z)){
                            alert("All inputs must be integers only!");
                            return 0;
                        }
                        //------------------------------------------------------------------------
                        function min(){
                            if(num1 < num2 && num1 < num3){
                                document.querySelector('#min').value = x;
                            }
                            else if(num2 < num1 && num2 < num3){
                                document.querySelector('#min').value = y;
                            }
                            else{
                                (num3 < num1 && num3 < num2)
                                    document.querySelector('#min').value = z;
                            }
                            document.querySelector('#min').innerHTML;
                            a = document.querySelector('#min').value;
                        }
                        //----------------------------------------------------------------------
                        function max(){
                            if(num1 > num2 && num1 > num3){
                                document.querySelector('#max').value = x;
                            }
                            else if(num2 > num1 && num2 > num3){
                                document.querySelector('#max').value = y;
                            }
                            else{
                                (num3 > num1 && num3 > num2)
                                    document.querySelector('#max').value = z;
                                }
                            document.querySelector('#max').innerHTML;
                            b = document.querySelector('#max').value;
                        }
                        //---------------------------------------------------------------------
                        function median(){
                            if(num1 > num2 && num1 < num3){
                                document.querySelector('#median').value = x;
                            }
                            else if(num2 > num1 && num2 < num3){
                                document.querySelector('#median').value = y;
                            }
                            else{
                                (num3 > num1 && num3 < num2)
                                    document.querySelector('#median').value = z;
                            }
                            document.querySelector('#median').innerHTML;                  
                    }
                    //----------------------------------------------------------------------
                    function mean(){
                        document.querySelector('#mean').value = ((x + y + z)/3);
                        document.querySelector('#mean').innerHTML;
                    }
                    //---------------------------------------------------------------------
                    function range(){
                        c = b - a;
                        document.querySelector('#range').value = c;
                        document.querySelector('#range').innerHTML; 
                    }
}






