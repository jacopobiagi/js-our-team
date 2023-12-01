let objecTeam = [
    {
        name: "Wayne Barnett",
        role: "founder e CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
]

let padre = document.getElementsByClassName("container")[0];


for(let i in objecTeam){

    let immagine = objecTeam[i].img;
    let nome = objecTeam[i].name;
    let ruolo = objecTeam[i].role

    let figlio = document.createElement("div");
    figlio.classList = "col-12 col-sm-6 col-md-4 d-flex flex-column justify-content-center";

    figlio.innerHTML = '<img src="img/'+immagine+'" alt="team">';
    figlio.innerHTML += '<h5>'+nome+'</h5>';
    figlio.innerHTML += '<h6>'+ruolo+'</h6>';

    padre.append(figlio);
}