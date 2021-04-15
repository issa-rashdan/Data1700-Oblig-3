function regBillett() {

    const billett = {
        film: $("#velgFilm").val(),
        antall: $("#antall").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    }

    $.post('/lagre', billett, function () {
        hentAlle();
    });

/*
    $("#velgFilm").val("Ikke valgt");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefon").val("");
    $("#epost").val("");

 */

    const Fornavn = document.getElementById("fornavn").value;
    const Etternavn = document.getElementById("etternavn").value;
    const Telefonnr = document.getElementById("telefon").value;
    const Epost = document.getElementById("epost").value;
    /*  const Velgfilm = document.getElementById("velgFilm").value; */
    const Antall = document.getElementById("antall").value;

    if (Fornavn === "") {
        document.getElementById("Fornavn1").innerHTML = "Skriv inn Fornavn"
    } else {
        document.getElementById("Fornavn1").innerHTML = ""
    }
    if (Etternavn === "") {
        document.getElementById("Etternavn1").innerHTML = "Skriv inn Etternavn"
    } else {
        document.getElementById("Etternavn1").innerHTML = ""
    }
    if (Telefonnr === "") {
        document.getElementById("Telefonnr1").innerHTML = "Skriv inn Telefonnr"
    } else {
        document.getElementById("Telefonnr1").innerHTML = ""
    }
    if (Epost === "") {
        document.getElementById("Epost1").innerHTML = "Skriv inn E-post"
    } else {
        document.getElementById("Epost1").innerHTML = ""
    }
    if (Antall === "") {
        document.getElementById("Antall1").innerHTML = "Skriv inn Antall"
    } else {
        document.getElementById("Antall1").innerHTML = ""
    }


    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefon").value="";
    document.getElementById("epost").value="";
   /* document.getElementById("velg").value="";

    */
    document.getElementById("antall").value="";

}
function hentAlle() {
    $.get("/hentAlle", function(data) {
        formaterData(data);
    });
}

function formaterData(liste){
    let print = '';
    for (billett of liste) {
        print += "<tr>" +
            "<td>" +billett.fornavn+ "</td>" +
            "<td>" +billett.etternavn+ "</td>" +
            "<td>" +billett.telefon+ "</td>" +
            "<td>" +billett.epost+ "</td>" +
            "<td>" +billett.film+ "</td>" +
            "<td>" +billett.antall+ "</td>" +
            "</tr>";
    }

    let ut = "<table class='table table-bordered table-striped'><tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefon</th>" +
        "<th>Epost</th>" +
        "<th>Film</th>" +
        "<th>Antall billetter</th>" +
        "</tr>" +print+ "</table>";

    $("#tabell").html(ut);
}

function nullstill() {
    $.get( "/nullstill", function() {
        hentAlle();
    })
}

