async function display(){
    let pokemon=await fetch(`https://pokeapi.co/api/v2/pokemon`)
let pokemon_name=await pokemon.json()
// console.log(pokemon_name)
var dis_cont=document.getElementById("dis");
let pokemon_local=localStorage.getItem("pokemon_inlocal")?JSON.parse(localStorage.getItem("pokemon_inlocal")):[];
if(pokemon_local.length==0){
    pokemon_name.results.forEach(e => {
        var cont_div=document.createElement("div")
        cont_div.setAttribute("id","dis_cont")
        var  pokemon_name_dis=document.createElement("b")
        pokemon_name_dis.innerText=e.name;
        cont_div.append(pokemon_name_dis)
        dis_cont.append(cont_div)
        pokemon_local.push(e.name)
        localStorage.setItem("pokemon_inlocal",JSON.stringify(pokemon_local))
    });
   
    
}
else{
    // dis_cont.innerHTML=""
    // console.log(pokemon_local)
    pokemon_local.forEach(e => {
        var cont_div=document.createElement("div")
        cont_div.setAttribute("id","dis_cont")
        var  pokemon_name_dis=document.createElement("b")
        pokemon_name_dis.innerText=e;
        cont_div.append(pokemon_name_dis)
        dis_cont.append(cont_div)
    });
}
}
display()
async function get(){
    var dis_cont=document.getElementById("pokemon_details");
    dis_cont.innerHTML=""
    // dis_cont.innerHTML=""
    var inp_name=document.getElementById("in").value
    let searchdata=await fetch(`https://pokeapi.co/api/v2/pokemon/${inp_name}`)
    let search_display=await searchdata.json()
    console.log(search_display)

var cont_div=document.createElement("div")
cont_div.setAttribute("id","search_dis")
var  pokemon_id=document.createElement("b")
pokemon_id.innerText="ID:-"+search_display.id
var  pokemon_name=document.createElement("h4")
pokemon_name.innerText="NAME:-"+search_display.name
var  pokemon_height=document.createElement("b")
pokemon_height.innerText="HEIGHT:-"+search_display.height
var  pokemon_weight=document.createElement("b")
pokemon_weight.innerText="WEIGHT:-"+search_display.weight

var abilitistr=""
var abilitiarray=search_display.abilities;
abilitiarray.forEach(e => {
    abilitistr+=e.ability.name+","
});
// console.log(abilitistr)

var  pokemon_abilities=document.createElement("b")
pokemon_abilities.innerText="ABILITIES:-"+abilitistr;

var move=""
var movearray=search_display.moves;
movearray.forEach((e,i) => {
    
  
        move+=e.move.name+","
     
    
});
// console.log(move)
var  pokemon_moves=document.createElement("b")
pokemon_moves.innerText="MOVE:-"+move;
cont_div.append(pokemon_id,pokemon_name,pokemon_height,pokemon_weight,pokemon_abilities,pokemon_moves)
dis_cont.append(cont_div)

}