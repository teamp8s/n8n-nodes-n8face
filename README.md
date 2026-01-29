# N8face Node for n8n

A community node for n8n that connects workflows with the **N8face web application** by attaching a user API key to workflow executions.

This node does **not** perform data processing or API actions by itself.  
Its primary purpose is to allow users to **link and track n8n workflows inside the N8face application**.

---

## What this node does

- Allows users to paste their **N8face API key** into n8n credentials
- Attaches the API key to workflow execution metadata
- Enables visibility of workflow runs inside the **N8face web application**
- Helps users monitor, audit, and analyze workflow activity from n8n

---

## Use cases

- Track n8n workflow executions in the N8face web UI
- Associate workflows with a specific user or account
- Enable analytics, monitoring, or billing features on the N8face side
- Provide execution context without changing workflow logic

---

## Installation

### n8n Cloud

1. Open **Settings** → **Community Nodes**
2. Click **Install a community node**
3. Enter: n8n-nodes-n8face
4. Confirm installation

### Self-hosted n8n

```bash
npm install n8n-nodes-n8face
```
Restart n8n after installation.

---

## Usage

### 1. Create credentials

1. Add the **N8face** node to your workflow
2. Click **Create new credential**
3. Select **N8face API**
4. Paste your API key
5. Click **Save**

---

### 2. Add the node to your workflow

- Place the **N8face** node anywhere in the workflow
- The node does not modify incoming or outgoing data
- It simply associates the workflow execution with your **N8face account**

---

## API Key

To obtain an API key:

1. Open the **N8face web application**
2. Sign in to your account
3. Click on your **avatar** and open the dropdown options menu
4. Copy and store it securely

---

## Support

- **Issues**: https://github.com/teamp8s/n8n-nodes-n8face/issues
- **Documentation**: https://github.com/teamp8s/n8n-nodes-n8face#readme

---

## License

MIT License. See the [LICENSE](https://github.com/teamp8s/n8n-nodes-n8face?tab=MIT-1-ov-file) file for details.
