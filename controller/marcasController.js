const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const marcas = {
    index: (req, res) =>{
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('¡Estas son nuestras marcas!!! \n\n')
              dbConcesionarias.forEach((concesionaria) => {
                   concesionaria.autos.forEach((auto)=>{
                       res.write(auto.marca +'\n')
                   })  
        })
        res.end('\n Elija la que te interese y vea sus modelos!!');
    },
    marcas: (req, res) => {
        let idMarca = req.params.id
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                if (auto.marca ==idMarca){
                    res.send(auto.marca +'\n'+ auto.modelo)
                }
            
            })
            res.send('Son todos nuestros autos')
    })
}
}

module.exports = marcas;