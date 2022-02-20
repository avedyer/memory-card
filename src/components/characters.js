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
    Character('Flame Princess', images['flameprincess.png']),
    Character('The Lich', images['lich.png']),
    Character('Gunter', images['gunter.png']),
    Character('Lady Rainicorn', images['rainicorn.png']),
    Character('Lumpy Space Princess', images['lsp.png']),

]

export default characters