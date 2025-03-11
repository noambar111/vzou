[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12
[System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }


# Define the base URL and endpoints for each topic
$baseUrl = "https://ds-sce.sce-fpm.com:3001/api/questions/bulk-insert"
$topics = @(
    "bubble-sort",
    "insertion-sort",
    "stack",
    "queue",
    "linked-list",
    "counting-sort",
    "radix-sort",
    "bucket-sort",
    "merge-sort",
    "quick-sort",
    "bst",
    "hash-table",
    "bfs",
    "dfs",
    "heap",
    "topological-sort",
    "avl-tree",
    "dijkstra",
    "bellman-ford",
    "kruskal",
    "prim",
    "knapsack",
    "lcs"
)

# Loop through each topic and send a POST request
foreach ($topic in $topics) {
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl/$topic" -Method Post -Headers @{"Content-Type" = "application/json"}
        Write-Host ("Response for {0}: {1}" -f $topic, $response.message)
    } catch {
        Write-Host ("Failed to insert questions for {0}. Error: {1}" -f $topic, $_)
    }
}
