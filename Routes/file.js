const fileRouter = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose')
const path = require('path');
const { mongo, connection } = require('mongoose');
const Grid = require('gridfs-stream');
const {GridFsStorage} = require('multer-gridfs-storage');
Grid.mongo = mongo;
// var gfs = Grid(connection.db);
let gfs, gridfsBucket;

connection.once('open', () => {
  // Init stream
  gridfsBucket = new mongo.GridFSBucket(connection.db, {
     bucketName: 'Uploads'
   });
   gfs = Grid(connection.db, mongo);
//   gfs.collection('uploads');
});
// set up connection to db for file storage
const storage = GridFsStorage({
  url: 'mongodb://localhost/TrackIt',
  file: (req, file) => {
    return {
      filename: file.originalname
    }
  }
});


// sets file input to single file

const singleUpload = multer({ storage: storage }).single('file');


// Posting a new File
fileRouter.post('/files', singleUpload, (req, res) => {
    console.log('trying to upload image......')
    console.log(req.file)
   if (req.file) {
      return res.json({
         success: true,
         file: req.file
      });
   }
    res.send({ success: false });
});


// get singleFile through fileName
fileRouter.get('/files/:id', (req, res) => {
   console.log('Getting Image.........', req.params.id)
   const id = req.params.id
   // gfs.files.find({ filename: req.params.filename }).toArray((err, files) => {
   //    if(!files || files.length === 0){
   //       return res.status(404).json({
   //          message: "Could not find file"
   //       });
   //    }

   //    var readstream = gridfsBucket.openDownloadStreamByName({
   //       filename: files[0].filename
   //    })
   //    res.set('Content-Type', files[0].contentType);
   //    return readstream.pipe(res);
   // });
   gfs.files.find().toArray((err, files) => {
      if(!files || files.length === 0){
         return res.status(404).json({
            message: "Could not find files"
         });
      }

      // var readstream = gfs.createReadStream({
      //    filename: files[0].filename
      // })

      // el._id.toString() === id.toString()
      const file = files.filter(el => el._id.toString() === id.toString())


      console.log(file, mongoose.Types.ObjectId(id), mongoose.Types.ObjectId(file[0]._id))

      const readstream = gridfsBucket.openDownloadStream(mongoose.Types.ObjectId(file[0]._id))

      // const readstream = gfs.createReadStream((file[0]._id));



      // res.set('Content-Type', file[0].contentType);
         return readstream.pipe(res);

      
   });
   // gridfsBucket.openDownloadStream(mongoose.Types.ObjectId(id))
   // res.set('Content-Type', files[0].contentType);
   //    return readstream.pipe(res);
        
});

fileRouter.get('/files', (req, res) => {
   gfs.files.find().toArray((err, files) => {
      if(!files || files.length === 0){
         return res.status(404).json({
            message: "Could not find files"
         });
      }
      return res.json(files);
   });
});



fileRouter.delete('/del/files/:id', (req, res) => {
   console.log("delParam:",req.params.id)
   const id = req.params.id
   gfs.remove({ _id: id, root: 'uploads'  }, (err) => {
      if (err) return res.status(500).json({ success: false })
      return res.json({ success: true });
   })
})

module.exports = fileRouter;