import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class N8faceApi implements ICredentialType {
	name = 'n8faceApi';

	displayName = 'N8face API';

	icon: Icon = { light: 'file:../icons/n8face.svg', dark: 'file:../icons/n8face.dark.svg' };

	documentationUrl =
		'https://github.com/teamp8s/n8n-nodes-n8face/tree/main?tab=readme-ov-file#1-configure-credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Copy and paste your API key from N8face application',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://plus8soft.app.n8n.cloud',
			url: '/webhook/e4eeeae4-7f0d-4087-a20b-39f0efbb89d9',
			method: 'POST',
			body: {
				apiKey: '={{$credentials.apiKey}}',
				text: 'test',
			},
		},
	};
}
