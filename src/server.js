import { app } from './app.js'

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
