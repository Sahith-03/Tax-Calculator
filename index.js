const form = document.getElementById('incomeForm');
const close = document.getElementById('close');
const result = document.getElementById('result');
const res = document.getElementById('res');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const gross = parseFloat(document.getElementById('gross').value);
    const extra = parseFloat(document.getElementById('extra').value);
    const age = parseFloat(document.getElementById('age').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    var net = gross + extra - deductions;
    if(net>800000){
        if(age<40){
            net=0.7*net;
        }
        else if(age>=40 && age<60){
            net=0.6*net;
        }
        else{
            net=0.9*net;
        }
    }
    res.innerHTML = net;
    result.style.display = 'block'; 
});

close.addEventListener('click', () => {
    result.style.display = 'none';
    form.reset();
});
