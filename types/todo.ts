export const jobStates = <const>["todo", "approved", "done"]
type JobStates = typeof jobStates[number]
export type Job = {
  name: string
  content?: string
  createDate: string
  state: JobStates
}
