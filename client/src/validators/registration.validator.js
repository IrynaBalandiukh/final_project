import joi from 'joi';

const registrationValidator = joi.object({
    email: joi.string().email({tlds: { allow: false }}).required().messages({'string.pattern.base': 'Incorrect email'}),
    password: joi.string().min(6).max(32).required().messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password must contain at least six characters',
        'string.max': 'Password should contain no more than 32 characters'
    }),
    first_name: joi.string().min(2).max(16).required().messages({
        'string.empty': 'First name cannot be empty',
        'string.min': 'First name must contain at least two characters',
        'string.max': 'First name should contain no more than 16 characters'
    }),
    last_name: joi.string().min(2).max(16).required().messages({
        'string.empty': 'Last name cannot be empty',
        'string.min': 'Last name must contain at least two characters',
        'string.max': 'Last name should contain no more than 16 characters'
    }),
    nick_name: joi.string().min(2).max(16).required().messages({
        'string.empty': 'Nick name cannot be empty',
        'string.min': 'Nick name must contain at least two characters',
        'string.max': 'Nick name should contain no more than 16 characters'
    }),
    description: joi.string().min(2).max(32).required().messages({
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must contain at least two characters',
        'string.max': 'Description should contain no more than 32 characters'
    }),
    position: joi.string().min(2).max(32).required().messages({
        'string.empty': 'Position cannot be empty',
        'string.min': 'Position must contain at least two characters',
        'string.max': 'Position should contain no more than 32 characters'
    })
})

export {registrationValidator};