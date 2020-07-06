const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const marcas = {
    index: (req, res) =>{
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('...........................................\n\n')
        res.write('¡Estas son las marcas que nos elijen!!! \n\n')
        res.write('...........................................\n\n')
        let sinRepetir = []
              dbConcesionarias.forEach((concesionaria) => {
                   concesionaria.autos.forEach((auto)=>{
                       if(!sinRepetir.includes(auto.marca)){
                           sinRepetir.push(auto.marca)
                       }
                   })  
        })
        sinRepetir.forEach(marca=>{
            res.write (' '+ marca+'\n\n')
        })
        res.write('...........................................\n\n')
        res.write('Elija la marca que te interese y vea sus modelos!!\n\n')
        res.end('...........................................\n\n')
    },
    marcas: (req, res) => {
        let idMarca = req.params.id
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('...........................................\n\n')
                    res.write('Estos son los modelos de la marca que elegiste\n\n')
                    res.write('...........................................\n\n')
        dbConcesionarias.forEach((concesionaria)=>{   
            concesionaria.autos.forEach((auto)=>{   
                if (auto.marca == idMarca){
                res.write('Marca: '+ auto.marca +' \n'+ 'Modelo: ' +auto.modelo+'\n'+ 'Año: ' + auto.anio+ '\n\n')
                }
            })  
        })
        res.write('...........................................\n\n')
       res.write('Son todos nuestros modelos\n\n') 
       res.end('...........................................\n\n')
    }
}

module.exports = marcas;