

 function newImage(source, left, bottom) {
    let image = document.createElement('img');
    image.src = source;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    return image
   }
   newImage('assets/green-character.gif', '100px', '100px');
   newImage('assets/pine-tree.png', '450px', '200px');
   newImage('assets/tree.png', '200px', '300px');
   newImage('assets/pillar.png', '320px', '60px');
   newImage('assets/crate.png', '150px', '200px');
   newImage('assets/well.png', '500px', '425px');
   
   
    let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)
   
    let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '850px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)
   

   
    function newItem(url, left, bottom) {
     let item = newImage(url, left, bottom)
   
     item.addEventListener('dblclick', () => {
      item.remove()
     })
    }
    newItem('assets/sword.png', '500px', '405px');
    newItem('assets/sheild.png', '165px', '185px');
    newItem('assets/staff.png', '600px', '100px');
   

   
    function title(url, left, bottom, width, height) {
     for(let h = 0; h < height; h++){
      for(let w = 0; w < width; w++){
       newImage(url, left + w*100, bottom+h*100)
      }
     }
    };
   
    let horizon = window.innerHeight / 1.75;
    let heightOfSky = window.innerHeight-horizon;
    let heightOfGrass = horizon;
   
    tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100);
    tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100);