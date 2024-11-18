
const listar =  (req,res,next)=>{
    let qmfoi = []
        connect.forEach(element => {
            let partici = element.participants
            partici.forEach(element => {
                qmfoi.push(element.name)
            });
        });
        req.body.participants = qmfoi
}


export default listar