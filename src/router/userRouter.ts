import express from 'express'

const router = express.Router()
const users = [
    {id: 1, name: " ming 1"},
    {id: 2, name: " ming 2"},
    {id: 3, name: " ming 3"}
];
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) res.status(404).send(`user id ${req.params.id} not found.`)
    res.send(user)
})

router.post('/', (req, res) => {
    res.send('Create user')
})

export {router};
