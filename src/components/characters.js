function Character(name, img) {
    return {
        name: name,
        img: img
    };
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./characters', false, /\.(png|jpe?g|svg)$/));

let characters = [
    Character('Finn the Human', images['finn.png']),
    Character('Jake the Dog', images['jake.png']),
    Character('BMO', images['bmo.png']),
    Character('The Earl of Lemongrab', images['earl.png']),
    Character('The Ice King', images['iceking.png']),
    Character('Marceline', images['marceline.png']),
    Character('Princess Bubblegum', images['pb.png']),
]

export default characters