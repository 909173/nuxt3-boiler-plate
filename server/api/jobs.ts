import { IncomingMessage, ServerResponse } from "http"
import fs from "fs"
import db from "./todo.json"
import { Job } from "~~/types/todo"

export default (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === "GET") return db.jobs as Job[]
  if (req.method === "POST") {
    let newJob: Job
    req.on(
      "data",
      (chunk: Buffer) => (newJob = JSON.parse(chunk.toString("utf8")))
    )
    req.on("end", () => {
      const jobs: Job[] = [...(db.jobs as Job[]), newJob]
      const text = JSON.stringify({
        ...db,
        jobs,
      })
      console.log(text)
      fs.writeFile("./server/api/todo.json", text, (err) => {
        if (err) console.log(err)
      })
      res.write("ok")
      res.end()
    })
  }
}
