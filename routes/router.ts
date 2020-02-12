import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes'/*Cuando alguien haga un http.get va obtener la informacion */, (req: Request, res : Response)=>{//Router es para crear los servicios rest
    //aqui se genera la peticion con un formato clave valor  
    const cuerpo = req.body.cuerpo;
    const de  = req.body.de;


    res.json({
        ok:true,
        cuerpo,//aqui se trae lo que queda en la const cuerpo y muestra 
        de,//""""""""""""const de"""""""
    });


});

router.post('/mensajes/:id', (req: Request, res : Response)=>{
    //aqui se genera la peticion con un formato clave valor  
    const cuerpo = req.body.cuerpo;
    const de  = req.body.de;
    const id = req.params.id;


    res.json({
        ok:true,
        cuerpo,//aqui se trae lo que queda en la const cuerpo y muestra 
        de,//""""""""""""const de"""""""
        id
    });


});


export default router;