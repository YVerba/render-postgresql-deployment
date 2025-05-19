import Router from "express";
import userController from "../controller/user.controller.js";
import postController from "../controller/post.controller.js";

const router = new Router();

router.post("/user", userController.createUser);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getOneUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

router.post("/post", postController.createPost);
router.get("/post", postController.getPostsByUser);

export default router;
