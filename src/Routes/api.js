const express=require('express');
const HelloController= ("./Controllers/HelloController");
const blogController= ("./Controllers/blogController");
const commentController= ("./Controllers/commentController");
const messageController= ("./Controllers/messageController");
const productController= ("./Controllers/productController");


const router=express.Router();

//routing HelloController
router.get("/hello-get",HelloController.Hello)
router.post("/hello-post",HelloController.Hello)
router.put("/hello-put",HelloController.Hello)
router.delete("/hello-delete",HelloController.Hello)

//routing blogController
router.get("/hello-get",blogController.kawsar)
router.post("/hello-post",blogController.kawsar)
router.put("/hello-post",blogController.kawsar)
router.delete("/hello-post",blogController.kawsar)

//routing commentController
router.get("/hello-get",commentController.azmal)
router.post("/hello-post",commentController.azmal)
router.put("/hello-post",commentController.azmal)
router.delete("/hello-post",commentController.azmal)

//routing messageController
router.get("/hello-get",messageController.rabbil)
router.post("/hello-post",messageController.rabbil)
router.put("/hello-post",messageController.rabbil)
router.delete("/hello-post",messageController.rabbil)


//routing productController
router.get("/hello-get",productController.hasan)
router.post("/hello-post",productController.hasan)
router.put("/hello-post",productController.hasan)
router.delete("/hello-post",productController.hasan)



//CRUD
/*exports.create = async (req, res) => {
    }


//exports.read  = async (req, res) => {
    }

//exports.delete  = async (req, res) => {
    }

//exports.update   = async (req, res) => {
    }
*/

module.exports=router;
