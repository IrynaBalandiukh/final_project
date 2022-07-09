import joi from 'joi';

const companyValidator = joi.object({
    name: joi.string().min(1).max(16).required().messages({
        'string.empty': 'Name cannot be empty',
        'string.min': 'Name must contain at least one character',
        'string.max': 'Name should contain no more than 16 characters'
    }),
    address: joi.string().min(2).max(16).required().messages({
        'string.empty': 'Address cannot be empty',
        'string.min': 'Address must contain at least two characters',
        'string.max': 'Address should contain no more than 16 characters'
    }),
    serviceOfActivity: joi.string().min(2).max(16).required().messages({
        'string.empty': 'Service of activity cannot be empty',
        'string.min': 'Service of activity must contain at least two characters',
        'string.max': 'Service of activity should contain no more than 16 characters'
    }),
    numberOfEmployees: joi.string().min(1).max(16).required().messages({
        'string.empty': 'Number of employees cannot be empty',
        'string.min': 'Number of employees must contain at least two characters',
        'string.max': 'Number of employees should contain no more than 16 characters'
    }),
    description: joi.string().min(2).max(32).required().messages({
        'string.empty': 'Description cannot be empty',
        'string.min': 'Description must contain at least two characters',
        'string.max': 'Description should contain no more than 32 characters'
    }),
    type: joi.string().min(2).max(32).required().messages({
        'string.empty': 'Type cannot be empty',
        'string.min': 'Type must contain at least two characters',
        'string.max': 'Type should contain no more than 32 characters'
    })
})

export {companyValidator};