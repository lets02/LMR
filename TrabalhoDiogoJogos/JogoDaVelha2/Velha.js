<script>
   //Funçao que verifica o jogo - Se existe um vencedor ou se deu empate
   function compara()
   {
      //INICIO DO SET (Utilizado para que o processamento dos dados seja em 50 milisegundos
      setTimeout( ()=> 
      {
            ///////////////////--DECLARAÇÃO DAS VARIAVEIS DO JOGO--////////////////////////////
            var cel1 = document.getElementById("cel1").value;
            var cel2 = document.getElementById("cel2").value;   
            var cel3 = document.getElementById("cel3").value;
            var cel4 = document.getElementById("cel4").value;
            var cel5 = document.getElementById("cel5").value;
            var cel6 = document.getElementById("cel6").value;
            var cel7 = document.getElementById("cel7").value;
            var cel8 = document.getElementById("cel8").value;
            var cel9 = document.getElementById("cel9").value;

            ///////////////////--PRIMEIRA LINHA--////////////////////////////        

                /*Compara a Primeira linha e calula*/
                if(cel1 !="" && cel1 == cel2 && cel2 == cel3)
                {
                    window.alert(cel3 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

            ///////////////////--SEGUNDA LINHA--////////////////////////////

                /*Compara a segunda linha e calula*/
                else if(cel4 !="" && cel4 == cel5 && cel5 == cel6)
                {
                    window.alert(cel6 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }
            
            ///////////////////--TERCEIRA LINHA--////////////////////////////

                /*Compara a segunda linha e calula o venceddor*/
                else if(cel7 !="" && cel7 == cel8 && cel8 == cel9)
                {
                    window.alert(cel9 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

            ///////////////////--PRIMEIRA COLUNA--////////////////////////////        

                /*Compara a Primeira COLUNA e calula*/
                else if(cel1 !="" && cel1 == cel4 && cel4 == cel7)
                {
                    window.alert(cel7 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

            ///////////////////--SEGUNDA COLUNA--////////////////////////////

                /*Compara a segunda COLUNA e calula*/
                else if(cel2 !="" && cel2 == cel5 && cel5 == cel8)
                {
                    window.alert(cel8 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }
               
            ///////////////////--TERCEIRA COLUNA--////////////////////////////

                /*Compara a terceira COLUNA e calula*/
                else if(cel3 !="" && cel3 == cel6 && cel6 == cel9)
                {
                    window.alert(cel9 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

            ///////////////////---DIAGONAIS---////////////////////////////
            
                /*1º DIAGONAL*/
                else if(cel1 !="" && cel1 == cel5 && cel5 == cel9)
                {
                    window.alert(cel9 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

                /*2º DIAGONAL*/
                else if(cel3 !="" && cel3 == cel5 && cel5 == cel7)
                {
                    window.alert(cel7 + " é o VENCEDOR" );
                    location.reload();//Utilizado para zerar o jogo caso exista um vencedor
                }

            ///////////////////---Empate---////////////////////////////
                else if (cel1 !="" &&
                         cel2 !="" &&
                         cel3 !="" &&
                         cel4 !="" &&
                         cel5 !="" &&
                         cel6 !="" &&
                         cel7 !="" &&
                         cel8 !="" &&
                         cel9 !="" )
                         {
                            window.alert("FIM DO JOGO : Deu Velha");
                            location.reload();//Utilizado para zerar o jogo após o empate
                        }
            }, 50)
    }   
    </script>