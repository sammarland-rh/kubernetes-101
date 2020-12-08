# Demo nodeJS App to show some basic things off in Kubernetes

## Endpoints available

### Badcode
`URL:PORT/badcode/json` - Hit this address lots of times to generate load. If you run this with a HPA this will trigger autoscaling. I use this command:

`hey -c 100 -z 5m http://URL:PORT/badcode/json` and that generate enough load to trigger the hpa after about 1 minute.

You need to have the HPA created. Yaml included in the kube directory

### Hostname
`URL:PORT/hostname` will return the current pod hostname. There is a `curl.sh` script in the root of the project that will curl in a loop and print out the hostname. The script needs jq installed. You can then scale your app up and down to see how service autoscaling works

### Config
`URL:PORT/` - Is a basic HTML page which has some info injected into it from a config map.


## Deployment 
To deploy the dev app run
`oc create -f kube/dc-dev-deployment.yaml`

To Deploy the prod app run
`oc create -f kube/prod-deployment.yaml`

The main difference is the dev app used a dc not deployment as I couldn't get the HPA to work with a deployment.
