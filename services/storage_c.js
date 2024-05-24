import { Router } from 'express'
import multer, { diskStorage } from 'multer'
import { join, extname as _extname } from 'path'
import { readFileSync } from 'fs'


const saveImage = multer.diskStorage({
    destination: join(__dirname, '../public/assets/images/productsThumbnails/'),
    filename: (_req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(_extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
        cb(null, true);
    } else {
        cb(new Error('El archivo debe ser una imagen.'));
    }
};

const fileUpload = multer({
    storage: saveImage,
    fileFilter: fileFilter
}).single('picture');



// // Configurar multer para guardar los archivos en una carpeta específica
// const saveImage = multer.diskStorage({
//     destination: join(__dirname, '../public/assets/images/productsThumbnails'), //'uploads/',
//     filename: (_req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });

// const fileUpload = multer({
//     storage: saveImage,
//     // limits: { fileSize: 1000000, files: 1 }
//     fileFilter: (req, file, cb) => {
//         const filetypes = /jpeg|jpg|png|webp/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(_extname(file.originalname));
//         if (mimetype && extname) {
//             return cb(null, true);
//         }
//         cb('Error: El archivo debe ser una imágen.');
//     }
// }).single('picture');




// export async function storage(imageFile, productCode) {

//     const diskstorage = diskStorage({
//         destination: join(__dirname, '../public/assets/images/productsThumbnails/'), // esta es la carpeta de destino de las imágenes, colocar la ruta public del proyecto
//         filename: (req, file, cb) => {
//             cb(null, Date.now() + '-' + productCode + '-' + file.originalname.toLocaleLowerCase) // este es el nombre que obtendrá el archivo
//         }
//     });


//     const fileUpload = multer({
//         storage: diskstorage,
//         fileFilter: ( req, file, cb) => {
//             const filetypes = /jpeg|jpg|png|webp/;
//             const mimetype = filetypes.test(file.mimetype);
//             const extname = filetypes.test(_extname(file.originalname));
//             if (mimetype && extname) {
//                 return cb(null, true);
//             }
//             cb('Error: El archivo debe ser una imágen.');
//         }
//     }).array('picture') // aqui es donde recibe las imagenes si es single es una si es un array son varias


// }


// router.post('/images/post', fileUpload,(req, res) => {

//     // https://www.youtube.com/watch?v=pSd9w9tx5MQ ***regresar al minuto 40 en caso de querer usar MySQL para almacenar

//     req.getConnection((err, conn) => {
//         if (err) return res.status(500).send('server error')

//         const type = req.file.mimetype
//         const name = req.file.originalname
//         const data = readFileSync(join(__dirname, '../images/' + req.file.filename))

//         conn.query('INSERT INTO images set ? ', [{type: type, name: name, data: data}] , (err, rows) => {
//             if (err)
//                 return res.status(500).send('server error')
//             res.send('image saved!!')
//         })
//     });
//     console.log(req.files) //se puede colocar req.files en caso de varios archivos
// })

export default fileUpload;