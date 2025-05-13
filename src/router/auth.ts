import { Router } from "express"
import { validateRegistration } from "../utils/validation"

const router = Router()

router.post("/register", (req: any, res: any) => {
    const validationResult = validateRegistration(req.body)

    if (!validationResult.success) {
        return res.status(400).json({
            url: req.url,
            description: "Registration failed: missing data",
            errors: validationResult.errors,
        })
    }

    res.status(200).json({
        url: req.url,
        description: "Registration successful!",
        data: req.body,
    })
})

export default router
