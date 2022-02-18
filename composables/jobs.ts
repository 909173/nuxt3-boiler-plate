import { useState } from "#app"
import { Job } from "@/types/todo"

export const useJobsState = () => {
  // state
  const jobs = useState<Job[]>("jobs", () => {
    return []
  })
  // FetchAction
  const fetchJobs = async () => {
    const { data: list } = await useFetch("/api/jobs")
    jobs.value = list.value
  }
  const postJobs = async (job: Job) => {
    const { data: res } = await useFetch("/api/jobs", {
      body: job,
      method: "POST",
    })
    jobs.value = res.value
  }
  return {
    jobs,
    todo: computed(() => jobs.value.filter((x) => x.state === "todo")),
    approved: computed(() => jobs.value.filter((x) => x.state === "approved")),
    done: computed(() => jobs.value.filter((x) => x.state === "done")),
    fetchJobs,
    postJobs,
  }
}
