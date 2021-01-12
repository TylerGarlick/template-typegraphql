import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

const PORT = process.env.PORT || 4000

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
    emitSchemaFile: true,
  })

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    playground: true,
  })

  // Start the server
  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)

  // other initialization code, like creating http server
}

bootstrap().catch(console.error)
