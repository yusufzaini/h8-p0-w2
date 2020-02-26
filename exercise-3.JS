
var nama="Fendra"
var peran="Raja"

if (nama=='' && peran==''){
    console.log("Nama harus diisi!!")
}

else if(peran==''){
    console.log("Halo " + nama + "Pilih peranmu untuk memulai game!")
}
else if (peran=="pemburu" || peran=="pemburu"){
    console.log("selamat datang di dunia proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + " , kamu dapat menyerang sekarang!")
}
else if (peran=="pemuda" || peran=="pemuda"){
    console.log("selamat datang di dunia Proxytia, " + nama)
    console.log("Halo" + peran + " " + nama + ", kamu akan membantu temanmu")
}
else if (peran=="Raja" || peran=="Raja"){
    console.log("Selamat datang di dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama + " , buat keputusan yang membantu temanmu")
}
