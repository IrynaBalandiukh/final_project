import joi from 'joi';

const loginValidator = joi.object({
    email: joi.string().email({tlds: { allow: false }}).required().messages({'string.pattern.base': 'Incorrect email'}),
    password: joi.string().min(6).max(32).required().messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must contain at least two characters',
        'string.max': 'Password should contain no more than 32 characters'
    })
})

export {loginValidator};