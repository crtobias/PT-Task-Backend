import { check,validationResult } from "express-validator";

export const validationTitle = () => {
    return[
        check('title').notEmpty().withMessage('El campo title esta vacio'),
        (req,res,next) => {

            const errors = validationResult(req)

            if(!errors.isEmpty()){
                const checkError = errors.array().map(error => error.msg)

                res.status(400).json({
                    msg: checkError
                })
                return
            }

            next()

        }
    ]
}

