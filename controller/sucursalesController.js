const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const sucursales = {
    index: (req, res) =>{
        
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('.............................................................\n\n')
        res.write('Estas son Nuestras Sucursales \n\n')
        res.write('.............................................................\n\n')
        dbConcesionarias.forEach((concesionaria)=>{
            res.write ('Sucursal: ' + concesionaria.sucursal +'\n' + 'Dirección: '+ concesionaria.direccion + '\n'+ 'Telefono' + concesionaria.telefono + '\n\n')
            res.write('.............................................................\n\n')          
        })
         res.end()
    },
    sucursales: (req, res) => {
        let idSucursal = req.params.id;
        res.set({'content-type':'text/plain;charset=utf-8'});
        dbConcesionarias.forEach(concesionaria=>{  
            if (concesionaria.sucursal == idSucursal){  
                 let cantidad = concesionaria.autos.length          
                res.write('...........................................\n\n')
                res.write(concesionaria.sucursal + '\n\n')
                res.write('...........................................\n\n')
                res.write('\n'+ 'Direccion: ' + concesionaria.direccion + '\n'+ 'telefono: ' + concesionaria.telefono+'\n\n')
                res.write('...........................................\n\n')
                res.write('Tenemos '+ cantidad + ' modelos para ofrecerle ellos son:\n\n'); 
                res.write('...........................................\n\n')
            concesionaria.autos.forEach(auto=>{
                res.write(auto.marca+' '+auto.modelo+'\n'+'año:' +auto.anio + '\ncolor: ' + auto.color+'\n\n')  
            }) 
            res.end('No dude en consultarnos por su proximo auto!!!')
            }
        });
       res.send('Disculpe, no disponemos de esa sucursal....')
    }
}

module.exports = sucursales;