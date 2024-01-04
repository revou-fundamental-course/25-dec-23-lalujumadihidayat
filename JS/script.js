function l(){
    var a = document.getElementById('a').value;
    var c = document.getElementById('c').value;

    l = a*c/2

    document.getElementById('l').innerHTML = l;
}

function k(){
    var sisi1 = +document.getElementById('Sisi1').value;
    var sisi2 = +document.getElementById('Sisi2').value;
    var sisi3 = +document.getElementById('Sisi3').value;

    k = sisi1+sisi2+sisi3

    document.getElementById('k').innerHTML = k;
}

function reset() {
    document.getElementById('a').value = '';
    document.getElementById('c').value = '';
    document.getElementById('Sisi1').value = '';
    document.getElementById('Sisi2').value = '';
    document.getElementById('Sisi3').value = '';

    document.getElementById('l').innerHTML = '0';
    document.getElementById('k').innerHTML = '0';
}

