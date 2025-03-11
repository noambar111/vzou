import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { sequelize } from './db.js'
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js'
import LecturerRouter from './routes/LecturerRoutes.js'
import UserRouter from './routes/UserRoutes.js'
import UserInputRouter from './routes/UserInputRoutes.js'
import TestResultsRoutes from './routes/TestResultsRoutes.js'
import UserTopicRoutes from './routes/progressRoutes.js'
import  {
  bulkInsertQuestions,
  bulkInsertBubbleSortQuestions,
  bulkInsertStackQuestions,
  bulkInsertQueueQuestions,
  bulkInsertLinkedListQuestions,
  bulkInsertCountingSortQuestions,
  bulkInsertRadixSortQuestions,
  bulkInsertBucketSortQuestions,
  bulkInsertMergeSortQuestions,
  bulkInsertQuickSortQuestions,
  bulkInsertBinarySearchTreeQuestions,
  bulkInsertHashTableQuestions,
  bulkInsertBFSQuestions,
  bulkInsertDFSQuestions,
  bulkInsertHeapQuestions,
  bulkInsertTopologicalSortQuestions,
  bulkInsertAVLTreeQuestions,
  bulkInsertDijkstrasAlgorithmQuestions,
  bulkInsertBellmanFordQuestions,
  bulkInsertKruskalsAlgorithmQuestions,
  bulkInsertPrimQuestions,
  bulkInsertKnapsackQuestions,
  bulkInsertLCSQuestions,
  getQuestionsByTopic,
  bulkInsertInsertionSortQuestions
} from './controllers/QuestionsControllers.js'

// uncomment 2 next lines for production
// import fs from 'fs'
// import https from 'https'
dotenv.config()

// uncomment 3 next lines for production
// const privateKey = fs.readFileSync(process.env.PRIVATE_KEY_PATH || '../certificate/STAR_sce-fpm_com.key', 'utf8')
// const certificate = fs.readFileSync(process.env.CERT_KEY_PATH || '../certificate/STAR_sce-fpm_com.crt', 'utf8')
// const credentials = { key: privateKey, cert: certificate }
const app = express()
const PORT = process.env.PORT || 3001
app.use(cors())
app.options('*', cors())
app.use(express.json())
app.use('/api/user', UserRouter)
app.use('/api/lecturer', LecturerRouter)
app.use('/api/input', UserInputRouter)
app.use('/api/test-results', TestResultsRoutes);
app.use('/api/user-progress', UserTopicRoutes);

app.post('/api/questions/bulk-insert/basic-programming', bulkInsertQuestions);
app.post('/api/questions/bulk-insert/bubble-sort', bulkInsertBubbleSortQuestions);

app.post('/api/questions/bulk-insert/iiiii', bulkInsertInsertionSortQuestions);

app.post('/api/questions/bulk-insert/stack', bulkInsertStackQuestions);
app.post('/api/questions/bulk-insert/queue', bulkInsertQueueQuestions);
app.post('/api/questions/bulk-insert/linked-list', bulkInsertLinkedListQuestions);
app.post('/api/questions/bulk-insert/counting-sort', bulkInsertCountingSortQuestions);
app.post('/api/questions/bulk-insert/radix-sort', bulkInsertRadixSortQuestions);
app.post('/api/questions/bulk-insert/bucket-sort', bulkInsertBucketSortQuestions);
app.post('/api/questions/bulk-insert/merge-sort', bulkInsertMergeSortQuestions);
app.post('/api/questions/bulk-insert/quick-sort', bulkInsertQuickSortQuestions);
app.post('/api/questions/bulk-insert/bst', bulkInsertBinarySearchTreeQuestions);
app.post('/api/questions/bulk-insert/hash-table', bulkInsertHashTableQuestions);
app.post('/api/questions/bulk-insert/bfs', bulkInsertBFSQuestions);
app.post('/api/questions/bulk-insert/dfs', bulkInsertDFSQuestions);
app.post('/api/questions/bulk-insert/heap', bulkInsertHeapQuestions);
app.post('/api/questions/bulk-insert/topological-sort', bulkInsertTopologicalSortQuestions);
app.post('/api/questions/bulk-insert/avl-tree', bulkInsertAVLTreeQuestions);
app.post('/api/questions/bulk-insert/dijkstra', bulkInsertDijkstrasAlgorithmQuestions);
app.post('/api/questions/bulk-insert/bellman-ford', bulkInsertBellmanFordQuestions);
app.post('/api/questions/bulk-insert/kruskal', bulkInsertKruskalsAlgorithmQuestions);
app.post('/api/questions/bulk-insert/prim', bulkInsertPrimQuestions);
app.post('/api/questions/bulk-insert/knapsack', bulkInsertKnapsackQuestions);
app.post('/api/questions/bulk-insert/lcs', bulkInsertLCSQuestions);



app.get('/api/get-questions-byTopic/:topicId/:questionLevel', getQuestionsByTopic);

// uncomment the next line for production
// const server = https.createServer(credentials, app)
//Error Handler - Last middleware
app.use(ErrorHandlingMiddleware)
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT)
    // uncomment for production
    // server.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}
export default app
start()
