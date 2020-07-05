const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))
const home = {
    index: (req, res) =>{
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('.............................................................\n\n')
        res.write('Bienvenidos a Concesionarias Digital \n\n')
        res.write('.............................................................\n\n')
        res.write('Tenemos para ofrecerte diferentes sucursales elegi la mas cercana a tu domicilio!! \n\n')
        res.write('.............................................................\n\n')

        dbConcesionarias.forEach((concesionaria)=>{
            res.write (concesionaria.sucursal+ '\n\n')            
        })
         res.end()
    }
}

module.exports = home;
