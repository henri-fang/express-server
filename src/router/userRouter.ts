import express from 'express'
import Joi from 'joi'

const router = express.Router()
const users = [
    {id: 1, name: " ming 1"},
    {id: 2, name: " ming 2"},
    {id: 3, name: " ming 3"}
];
const schema = Joi.object({
    id: Joi.number().min(1).message('id must be number'),
    name: Joi.string().min(1).max(32).message('name is invalid.')
});

const validateFn = (requestEntity: {}, entitySchema: Joi.ObjectSchema): Joi.ValidationResult =>
    entitySchema.validate(requestEntity)

router.get('/:id', (req, res) => {
    const {error} = validateFn(req.params, schema);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send(`user id ${req.params.id} not found.`)
    res.send(user);
})

router.post('/', (req, res) => {
    res.send('Create user')
})

export {router};
