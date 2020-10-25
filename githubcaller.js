import { Octokit } from "https://cdn.pika.dev/@octokit/rest";

const octokit = new Octokit();

const commitNumber = await octokit.request("GET /repos/{owner}/{repo}/stats/commit_activity", {
    owner: 'varunan-vara',
    repo: "cracker"
})

function test () {
    console.log(String(commitNumber))
}