document.getElementById('FormSuma').addEventListener('submit',
    function(event){
        event.preventDefault();
        let numero1 = parseFloat( document.getElementById('numero1').value);
        let numero2 = parseFloat( document.getElementById('numero2').value);
        let resultado;
        if(numero1 > numero2){
            resultado = 'mayor';
        }
        else{
            if(numero1 < numero2){
                resultado = 'menor';
            }
            else{
                resultado = 'igual';
            }
        }

        
        document.getElementById('resultado').innerText = 'El numero 1 es '+ resultado + ' al numero 2';
    }
);