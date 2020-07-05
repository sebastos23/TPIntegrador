const fs = require ('fs');
const dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

const autos = {
    index: (req, res) =>{
        res.set({'Content-Type':'text/plain; charset=utf-8'})
        res.write('\n...........................\n')
        res.write('Estas son nuestros autos!! \n\n')
        dbConcesionarias.forEach((concesionaria)=>{
            consesionaria.forEach((auto)=>{
                res.write(auto.marca)
            })
            //res.write(concesionaria.autos+'\n\n')            
        })
         res.end()    
    }

}

module.exports = autos;
/*    enviarAutos: function(req,res){
        res.set({"content-type":"text/plain; charset=utf-8"})
        res.write("Bienvenido, aqui podra encontrar las lista de nuestro vehiculos\n\n")  
        controllersAutos.listarAutos().forEach(auto => {
                res.write("\nMarca:" + auto.marca)
                res.write("\nColor:" + auto.color)
                res.write("\nAño:" + auto.anio + "\n\n")*/
