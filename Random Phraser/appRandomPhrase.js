
const langueDeBoisGenerator={
  part1:['Mesdames,messieurs','Je reste fondamentalement persuadé que','Dès lors, sachez que je me battrai pour faire admettre que','Par ailleurs, c’est en toute connaissance de cause que je peux affirmer aujourd’hui que','Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que','J’ai depuis longtemps(ai-je besoin de vous le rappeler ?),défendu l’idée que','Et c’est en toute conscience que je déclare avec conviction que','Et ce n’est certainement pas vous, mes chers compatriotes, qui me contredirez si je vous dis que',
  ],
  part2: ['la conjoncture actuelle','la situation d’exclusion que certains d’entre vous connaissent ','l’acuité des problèmes de la vie quotidienne','la volonté farouche de sortir notre pays de la crise','l’effort prioritaire en faveur du statut précaire des exclus','le particularisme du à notre histoire unique','l’aspiration plus que légitime de chacun au progrès social ','la nécessité de répondre à votre inquiétude journalière, que vous soyez jeunes ou âgés,'
  ],
  part3:['doit s’intégrer à la finalisation globale','oblige à la prise en compte encore plus effective','interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie','a pour conséquence obligatoire l’urgente nécessité ','conforte mon désir incontestable d’aller dans le sens','doit nous amener au choix r éellement impératif ','doit prendre en compte les préoccupations de la population de base dans l’élaboration','entraine une mission somme toute des plus exaltantes pour moi : l’élaboration'
  ],
  part4:['d’un processus allant vers plus d’égalité.','d’un avenir s’orientant vers plus de progrès et plus de justice. ','d’une restructuration dans laquelle chacun pourra enfin retrouver sa dignité.' ,'d’une valorisation sans concession de nos caract ères spécifiques.','d’un plan correspondant véritablement aux exigences légitimes de chacun. ','de solutions rapides correspondant aux grands axes sociaux prioritaires. ','d’un programme plus humain, plus fraternel et plus juste. ','d’un projet porteur de véritables espoirs, notamment pour les plus démunis. ',
  ],
  pick(array){
    let select=Math.floor(Math.random()*(array.length));
    return array[select];
  },
  phraser(){
    const{part1,part2,part3,part4}=this;
    const tab=[part1,part2,part3,part4];
    let sentence=[];
    tab.forEach(e=>{
        let numCase=this.pick(e);
        console.log(numCase)
        sentence.push(numCase);
    })
    console.log(sentence.join(' '));
    return sentence.join(' ');
  }
}
let nonSence=langueDeBoisGenerator.phraser();

let test=document.querySelector('h1');
console.log(test);
test.innerText=nonSence;

const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    // const {
    //   phrases
    // } = this;
    const idx = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[idx]
  },
  start() {
    //Use an arrow function to avoid getting a different 'this':
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log(this)
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  }
}
annoyer.start();
annoyer.stop();
