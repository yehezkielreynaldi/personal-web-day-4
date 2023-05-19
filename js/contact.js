// console.log("Hello Student!");
// alert("Good Morning Everyone!");
// document.write("Batch 47");

// Variable

// VAR
// LET
// CONST


// var bisa di deklarasikan ulang dan bisa diubah value/data nya
// var gelas = "Air Putih";
// var gelas = "Kopi";
// console.log(gelas);

// let tidak bisa dideklarasikan ulang, namun value/datanya bisa kita ubah
// let pemerintah = "PDIP";
// pemerintah = "GOLKAR";
// console.log(pemerintah);

// tidak bisa dideklarasikan ulang dan tidak bisa diubah value/datanya
// const rog = "Asus";
// // rog = "lennovo";
// console.log(rog);

// data type
// let nama = "Yehezkiel Reynaldi"; // string
// let umur = 21; // number
// let isMarried = false; // boolean

// nama saya Yehezkiel Reynadi umur saya 21 tahun
// console.log(`Nama saya ${nama} umur saya ${umur} tahun`);
// console.log("nama saya ", nama, "umur saya ", umur, "tahun");
// console.log("nama saya " + nama + " " + "umur saya " + umur + " " + "tahun");


// operator
// let x = 48;
// let y = 4;

// let result = x + y;
// console.log(result);

// condition
// jika nilai sama dengan atau lebih dari 75 maka lulus

// let nilai = 75
// if (nilai >= 75) {
//     console.log("Ya lulus deh lu cil");
// } else {
//     "Ya lu gk lulus lah tol";
// }

// function

// function Hello() {
//     let x = 5;
//     let y = 10

//     let result = x * y;
//     console.log(result);
// }

// Hello()

// function Hello2(x, y) {

//     console.log(x);
//     console.log(y);

//     let result = x * y;
//     console.log(result);
// }

// Hello2(5, 10);

// camelcase = namaSayaAdalah

// function namaSaya(name) {
//     console.log(name);
// }

// namaSaya("Hezki");

function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name == "") {
        return alert("Nama wajib diisi!");
    } else if (email == "") {
        return alert("Email harus diisi!");
    } else if (phone == "") {
        return alert("Phone harus diisi!");
    } else if (subject == "") {
        return alert("Subject harus dipilih!");
    } else if (message == "") {
        return alert("Message Wajib diisi");
    }

    let emailReceiver = "yehezkielreynaldi01@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}. Silahkan kontak saya di nomor ${phone}, terimakasih.`
    a.click()

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let emailer = {
        name,
        email,
        phone,
        subject,
        message
    };

    console.log(emailer);
}