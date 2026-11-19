/*const ovosje = ["jabolko", "banana", "malina"];

ovosje.push("portokal");
ovosje.pop();
console.log(ovosje);
ovosje.unshift("kivi");
console.log(ovosje);
ovosje.shift();
console.log(ovosje);*/

/*const drugoOvosje = ["praska", "kajsija"];
const dolzinaPoPushMetoda = drugoOvosje.push("krusha");
console.log(drugoOvosje, dolzinaPoPushMetoda);
const izvadenoOvosje = drugoOvosje.pop();
console.log(izvadenoOvosje); 

const broeviPoIzbor = [3, 8, 12, 13, 17];
const parni = [];

for (let i = 0; i < broeviPoIzbor.length; i++){
  if(broeviPoIzbor[i] % 2 === 0) {
    parni[parni.length] = broeviPoIzbor[i];
  }
}
for (let i = 0; i < broeviPoIzbor.length; i++)
  if (broeviPoIzbor[i] % 2 === 0){
    parni.push(broeviPoIzbor[i])
  }
*/
/*  const predmeti = ["html", "css"];
predmeti.unshift("Javascript");
predmeti.push("git");
console.log(predmeti);
console.log(predmeti.length);
const otstranetPredmet = predmeti.pop();
console.log(otstranetPredmet);
console.log(predmeti); */

/*const jazik = "JavaScript";
console.log(jazik[0]);
console.log(jazik.length);
console.log(jazik[jazik.length - 1]);
console.log(jazik.toUpperCase());
console.log(jazik.toLowerCase());

const vsnesenoIme = "Ana";
console.log(vsnesenoIme);
const cistoIme = vsnesenoIme.trim();
console.log(cistoIme);
console.log('Zdravo, ${cistoIme');
console.log("banana".replace("a", "o"));
console.log("banana".replaceAll("a", "o"));

const zbor = "banana";
const zamenaZbor = zbor.replaceAll("a", "o");
console.log(zamenaZbor);*/

/*const gradovi = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"];
console.log(gradovi.includes("Ohrid"));
console.log(gradovi.includes("Tetovo"));
console.log(gradovi.indexOf("Kichevo"));
console.log(gradovi.indexOf("Strumica"));*/

const poraka = "Uchime JavaScript";
console.log(poraka.includes("JavaScript"));
console.log(poraka.includes("Java"));
console.log(poraka.startsWith("Uchime"));
console.log(poraka.endsWith("Script"));

console.log("   JAVASCRIPT   ".trim().toLowerCase() === "javascript");

const gradovi = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"];
const slajsGradovi = gradovi.slice(1);

const slajsPoraka = poraka.slice(4);
console.log(gradovi);
console.log(slajsGradovi);
console.log(slajsPoraka);

const gradoviZaPromena = ["Skopje", "Tetovo", "Kichevo", "Kavadarci"]
const izbrisaniGradovi = gradoviZaPromena.splice(1, 2, "Veles");
console.log(gradoviZaPromena);
console.log(izbrisaniGradovi);

const spisok = "Krste,Mirce,Aco"
const iminja = spisok.split(",")
console.log(spisok);
console.log(iminja);
console.log(iminja.join(" | "));

const vneseniGradovi = "Skopje, Ohrid, Bitola".split(",")
const cistiGradovi = []
console.log(vneseniGradovi);
for (let i = 0; i < vneseniGradovi.length; i++){
  cistiGradovi.push(vneseniGradovi[i].trim());
}
console.log(cistiGradovi);

const pocetniBroevi = [2, 3, 4, 6, 7, 20];
const zgolemeni = pocetniBroevi.map((broj, i) => {
  console.log(broj, i);
  return broj * 2;
});
console.log(zgolemeni);
console.log(pocetniBroevi);

const neuredeniIminja = ["stojko", "MARKO", "Elena"]; 
  const sredeniIminja = neuredeniIminja.map((ime) => {
  return ime.trim().toLowerCase(); 
});
console.log (sredeniIminja);

const bodovi = [40, 80, 60, 25];
const polozeni = bodovi.filter((bod) => {
  return bod >= 60;
});

const polozen = bodovi.find((bod) => {
  return bod >= 60;
});

console.log(polozeni);

const iminjaSoA = sredeniIminja.filter((ime) => {
  return ime.endsWith("a");
})
console.log(iminjaSoA);

const iznosi = [10, 20, 30];
const vkupno = iznosi.reduce((zbir, iznos) => {
  return zbir + iznos
}, 0);
console.log(vkupno);

const ceni = [20, 60, 10, 5, 70];
const podredeniCeni = ceni.slice();
podredeniCeni.sort((a, b) => {
  return b - a;
})
console.log(ceni);
console.log(podredeniCeni);