# TARS Helm Charts

This directory contains Helm charts for deploying TARS on Kubernetes.

## Quick Start

```bash
# Clone repository
git clone https://github.com/tars-ai/tars.git
cd tars

# Create values.yaml with your API key(s)
cat > values.yaml <<EOF
tars-agent:
  apiKeys:
    anthropic:
      value: "sk-ant-your-key-here"
EOF

# Install
helm install tars ./helm --namespace tars --create-namespace -f values.yaml

# Access
kubectl port-forward -n tars svc/tars-ui 9992:9992
```

Access at: http://localhost:9992

## Structure

```
helm/
├── Chart.yaml              # Main chart
├── values.yaml             # Default values
├── values-proxy.yaml       # LiteLLM proxy configuration
├── templates/              # Kubernetes templates
└── charts/                 # Subcharts
    ├── tars-desktop/    # Desktop VNC service
    ├── tars-agent/      # Backend API service
    ├── tars-ui/         # Frontend UI service
    ├── tars-llm-proxy/  # Optional LiteLLM proxy
    └── postgresql/         # PostgreSQL database
```