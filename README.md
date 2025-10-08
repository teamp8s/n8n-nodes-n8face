# N8face Node for n8n

A community node for n8n that integrates with the N8face API for face processing capabilities.

## Features

- **API Integration**: Seamlessly connect to N8face API
- **Secure Credentials**: Store API keys securely using n8n's credential system
- **Text Processing**: Send text data for face processing
- **Error Handling**: Robust error handling with continue on fail option

## Installation

### For n8n Cloud

1. In your n8n instance, go to **Settings** → **Community Nodes**
2. Click **Install a community node**
3. Enter the package name: `n8n-nodes-n8face`
4. Click **Install**

### For Self-hosted n8n

```bash
npm install n8n-nodes-n8face
```

## Usage

### 1. Configure Credentials

1. In your n8n workflow, add the **N8face** node
2. Click on **Create New Credential**
3. Select **N8face** from the credential types
4. Enter your API key (e.g., `key_68a8e1ce-84d3-454d-9bd9-6e28335653b4`)
5. Save the credential

### 2. Configure the Node

1. **Text**: Enter the text you want to process
2. **Credential**: Select your N8face API credential

### 3. API Request Details

The node will send a POST request to:
```
https://plus8soft.app.n8n.cloud/webhook/e4eeeae4-7f0d-4087-a20b-39f0efbb89d9
```

With the following JSON payload:
```json
{
  "apiKey": "your-api-key",
  "text": "your-text-input"
}
```

## Example Workflow

1. **Manual Trigger** → **N8face** → **Set** (to process response)

## API Key

To get your API key:
1. Visit [N8face Platform](https://plus8soft.app.n8n.cloud)
2. Sign up or log in to your account
3. Navigate to API settings
4. Generate a new API key
5. Copy the key (format: `key_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

## Support

- **Documentation**: [N8face Documentation](https://plus8soft.app.n8n.cloud)
- **Issues**: [GitHub Issues](https://github.com/plus8soft/n8n-nodes-n8face/issues)
- **Email**: support@plus8soft.app

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0
- Initial release
- Basic N8face API integration
- Secure credential management
- Text processing support