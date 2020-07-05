const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autos = {
    index: (req, res) =>{
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('\n...........................................\n\n')
        res.write('Estas son nuestros autos!! \n\n')
        res.write('...........................................\n\n')
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                res.write('* ' + auto.marca + ' '+ auto.modelo + ' '+ auto.anio + ' '+ auto.color + '\n\n')   
            })      
        })
        res.write('...........................................\n\n')
         res.write('Elija el que le agrade y no dude en consultarnos!!\n\n') 
         res.end('...........................................\n\n')   
    },
    marca: (req, res) => {
        let idMarca = req.params.id
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('...........................................\n\n')
                res.write('Estos son los modelos de la marca que elegiste\n')
                res.write('...........................................\n\n')
       /* dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                if (auto.marca == idMarca){
                    
                res.write('Marca: '+ auto.marca +' \n'+ 'Modelo: ' +auto.modelo+'\n'+ 'Año: ' + auto.anio+ '\n\n')
                }
            })
            res.end('Son todos nuestros modelos')
        })*/
    }
}

module.exports = autos;