const express = require("express")
const router = express.Router()
const Author = require("../models/author")

//all authors route
router.get('/',async (req,res)=>{
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions);
        res.render('authors/index', {
            authors : authors, 
            searchOptions : req.query})
    }
    catch{
        res.redirect('/')
    }
    
});
// new author route
router.get('/new',(req,res)=>{
    res.render('authors/new', {author : new Author()})
});

// all authors route



//create author
// router.post('/',(req,res)=>{
//     res.send("create")
// });


//new author route
router.post('/',async (req,res)=>{
    const author = new Author({name: req.body.name})
    try{
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    }
    catch(err){//console.log(err);
        res.render('authors/new', {
                            author : author, 
                              errorMessage: 'error creating Author'
                            })

    }
})



// router.post('/', (req, res) => {
//         const author = new Author({name: req.body.name})
//             author.save().then(()=>{
//                 res.send(`User Created ${req.body.name}`)
//             }).catch((err)=>{
//                 //console.log(err);
//                     res.render('authors/new', 
//                             { author : author, 
//                               errorMessage: 'error creating Author'
//                             })

                
//                  })
//               // res.send(req.body.name)})')
// });


module.exports = router